#!/usr/bin/env python3
import http.server
import socketserver
import json
import os
import urllib.parse
from datetime import datetime

class QCServerHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/save':
            self.save_evaluation()
        elif self.path == '/api/delete':
            self.delete_evaluation()
        else:
            self.send_error(404)
    
    def do_GET(self):
        if self.path == '/api/evaluations':
            self.get_evaluations()
        elif self.path.startswith('/api/'):
            self.send_error(404)
        else:
            # Serve static files
            super().do_GET()
    
    def save_evaluation(self):
        try:
            # Read the posted data
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            evaluation_data = json.loads(post_data.decode('utf-8'))
            
            # Load existing evaluations
            evaluations = self.load_evaluations()
            
            # Add new evaluation
            evaluations.append(evaluation_data)
            
            # Save back to file
            with open('evaluations.json', 'w') as f:
                json.dump(evaluations, f, indent=2)
            
            # Send success response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {'status': 'success', 'message': 'Evaluation saved'}
            self.wfile.write(json.dumps(response).encode('utf-8'))
            
        except Exception as e:
            self.send_error(500, f"Error saving evaluation: {str(e)}")
    
    def delete_evaluation(self):
        try:
            # Read the posted data
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            eval_id = data.get('id')
            
            # Load existing evaluations
            evaluations = self.load_evaluations()
            
            # Remove evaluation with matching ID
            evaluations = [e for e in evaluations if e.get('id') != eval_id]
            
            # Save back to file
            with open('evaluations.json', 'w') as f:
                json.dump(evaluations, f, indent=2)
            
            # Send success response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {'status': 'success', 'message': 'Evaluation deleted'}
            self.wfile.write(json.dumps(response).encode('utf-8'))
            
        except Exception as e:
            self.send_error(500, f"Error deleting evaluation: {str(e)}")
    
    def get_evaluations(self):
        try:
            evaluations = self.load_evaluations()
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(evaluations).encode('utf-8'))
            
        except Exception as e:
            self.send_error(500, f"Error loading evaluations: {str(e)}")
    
    def load_evaluations(self):
        if os.path.exists('evaluations.json'):
            try:
                with open('evaluations.json', 'r') as f:
                    return json.load(f)
            except (json.JSONDecodeError, FileNotFoundError):
                pass
        return []
    
    def do_OPTIONS(self):
        # Handle CORS preflight requests
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == "__main__":
    PORT = 8080
    Handler = QCServerHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"QC Calculator Server running on port {PORT}")
        print(f"Access from any device: http://10.40.2.208:{PORT}")
        print("Evaluation history now shared across all devices!")
        httpd.serve_forever()