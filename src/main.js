// src/main.js
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
	});

	mainWindow.loadFile('./src/index.html');
}

// After initialization, you can create browser windows.
app.whenReady().then(createWindow);
