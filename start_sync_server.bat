@echo off
echo ============================================================
echo  QC Calculator Multi-Device Sync Server Launcher
echo ============================================================
echo.

:: Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.6 or higher
    pause
    exit /b 1
)

:: Navigate to the QC Calculator directory
cd /d "%~dp0"

:: Check if the sync server file exists
if not exist "sync_server.py" (
    echo ERROR: sync_server.py not found in current directory
    echo Please make sure you're running this from the QC Calculator folder
    pause
    exit /b 1
)

:: Stop any existing Python servers
taskkill /f /im python.exe >nul 2>&1

echo Starting QC Calculator Sync Server...
echo.

:: Start the sync server
python sync_server.py

pause