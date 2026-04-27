#!/usr/bin/env python3
"""
QC Calculator Sync Server with SQLite Database
Enables real-time evaluation history sync across all devices
"""

import http.server
import socketserver
import json
import sqlite3
import os
import urllib.parse
from datetime import datetime
import socket

class QCSyncHandler(http.server.SimpleHTTPRequestHandler):
    
    def __init__(self, *args, **kwargs):
        self.db_path = 'qc_evaluations.db'
        self.init_database()
        super().__init__(*args, **kwargs)
    
    def init_database(self):
        """Initialize the SQLite database with evaluations table"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS evaluations (
                    id INTEGER PRIMARY KEY,
                    timestamp TEXT NOT NULL,
                    data TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            conn.commit()
            conn.close()
            print(f"Database initialized: {self.db_path}")
            
        except Exception as e:
            print(f"Database initialization error: {e}")
    
    def do_GET(self):
        """Handle GET requests"""
        if self.path == '/api/evaluations':
            self.handle_get_evaluations()
        elif self.path == '/api/status':
            self.handle_status()
        else:
            # Serve static files (HTML, CSS, JS)
            super().do_GET()
    
    def do_POST(self):
        """Handle POST requests"""
        if self.path == '/api/save':
            self.handle_save_evaluation()
        elif self.path == '/api/delete':
            self.handle_delete_evaluation()
        else:
            self.send_error(404, "Endpoint not found")
    
    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self.send_response(200)
        self.add_cors_headers()
        self.end_headers()
    
    def add_cors_headers(self):
        """Add CORS headers for cross-origin requests"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Access-Control-Max-Age', '86400')
    
    def handle_get_evaluations(self):
        """Get all evaluations from database"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute('''
                SELECT id, timestamp, data FROM evaluations 
                ORDER BY created_at DESC
            ''')
            
            rows = cursor.fetchall()
            evaluations = []
            
            for row in rows:
                eval_data = json.loads(row[2])
                eval_data['id'] = row[0]
                eval_data['timestamp'] = row[1]
                evaluations.append(eval_data)
            
            conn.close()
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.add_cors_headers()
            self.end_headers()
            
            response = {
                'success': True,
                'evaluations': evaluations,
                'count': len(evaluations),
                'server_time': datetime.now().isoformat()
            }
            
            self.wfile.write(json.dumps(response).encode())
            print(f"Sent {len(evaluations)} evaluations to client")
            
        except Exception as e:
            self.send_error_response(500, f"Failed to retrieve evaluations: {str(e)}")
    
    def handle_save_evaluation(self):
        """Save new evaluation to database"""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode()
            evaluation_data = json.loads(post_data)
            
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            # Generate unique ID and timestamp
            eval_id = int(datetime.now().timestamp() * 1000)
            timestamp = datetime.now().isoformat()
            
            cursor.execute('''
                INSERT INTO evaluations (id, timestamp, data)
                VALUES (?, ?, ?)
            ''', (eval_id, timestamp, json.dumps(evaluation_data)))
            
            conn.commit()
            conn.close()
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.add_cors_headers()
            self.end_headers()
            
            response = {
                'success': True,
                'message': 'Evaluation saved successfully',
                'id': eval_id,
                'timestamp': timestamp
            }
            
            self.wfile.write(json.dumps(response).encode())
            print(f"Saved evaluation with ID: {eval_id}")
            
        except Exception as e:
            self.send_error_response(500, f"Failed to save evaluation: {str(e)}")
    
    def handle_delete_evaluation(self):
        """Delete evaluation from database"""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode()
            data = json.loads(post_data)
            eval_id = data.get('id')
            
            if not eval_id:
                self.send_error_response(400, "Evaluation ID required")
                return
            
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            
            cursor.execute('DELETE FROM evaluations WHERE id = ?', (eval_id,))
            deleted_count = cursor.rowcount
            
            conn.commit()
            conn.close()
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.add_cors_headers()
            self.end_headers()
            
            response = {
                'success': True,
                'message': f'Evaluation deleted successfully',
                'deleted': deleted_count > 0
            }
            
            self.wfile.write(json.dumps(response).encode())
            print(f"Deleted evaluation ID: {eval_id}")
            
        except Exception as e:
            self.send_error_response(500, f"Failed to delete evaluation: {str(e)}")
    
    def handle_status(self):
        """Server status endpoint"""
        try:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute('SELECT COUNT(*) FROM evaluations')
            count = cursor.fetchone()[0]
            conn.close()
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.add_cors_headers()
            self.end_headers()
            
            response = {
                'status': 'online',
                'database': 'connected',
                'total_evaluations': count,
                'server_time': datetime.now().isoformat(),
                'database_file': self.db_path
            }
            
            self.wfile.write(json.dumps(response).encode())
            
        except Exception as e:
            self.send_error_response(500, f"Status check failed: {str(e)}")
    
    def send_error_response(self, code, message):
        """Send JSON error response"""
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.add_cors_headers()
        self.end_headers()
        
        response = {
            'success': False,
            'error': message,
            'server_time': datetime.now().isoformat()
        }
        
        self.wfile.write(json.dumps(response).encode())
        print(f"Error {code}: {message}")

def get_network_ip():
    """Get the local network IP address"""
    try:
        # Connect to a remote address to determine local IP
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except:
        return "localhost"

if __name__ == '__main__':
    PORT = 8080
    
    # Get network IP for sharing
    network_ip = get_network_ip()
    
    print("=" * 60)
    print("🔄 QC Calculator Multi-Device Sync Server")
    print("=" * 60)
    print(f"📍 Local access:   http://localhost:{PORT}")
    print(f"🌐 Network access: http://{network_ip}:{PORT}")
    print(f"📱 Share this URL with all devices on your network!")
    print("=" * 60)
    print("✅ SQLite database for persistent storage")
    print("✅ Real-time evaluation history sync")
    print("✅ Cross-device compatibility")
    print("=" * 60)
    print("Press Ctrl+C to stop the server")
    print()
    
    try:
        with socketserver.TCPServer(("", PORT), QCSyncHandler) as httpd:
            print(f"🚀 Server started successfully on port {PORT}")
            print(f"📊 API endpoints available:")
            print(f"   GET  /api/evaluations - Retrieve all evaluations")
            print(f"   POST /api/save       - Save new evaluation")
            print(f"   POST /api/delete     - Delete evaluation")
            print(f"   GET  /api/status     - Server status")
            print()
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {PORT} is already in use!")
            print("   Try stopping other servers or use a different port")
        else:
            print(f"❌ Server error: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")