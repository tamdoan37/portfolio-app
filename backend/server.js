import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';
import fs from 'fs/promises';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

// --- ESM SETUP ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---

// CORS Configuration (Allows your Angular app to talk to this server)
app.use(cors({
    origin: [
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'http://localhost:3000'
    ],
    credentials: true
}));

//  Security Headers (CSP disabled to allow local images/styles during development)
app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(express.json());
app.use(cookieParser('key-here'));

// Request Logging (Great for debugging)
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

// --- API ROUTES ---

// GET: Load projects from the projects.json file in this folder
app.get('/api/projects', async (req, res) => {
    try {
        const filePath = join(__dirname, 'projects.json');
        const fileData = await fs.readFile(filePath, 'utf8');
        const projectsData = JSON.parse(fileData);
        res.json(projectsData);
    } catch (error) {
        console.error("[SERVER ERROR] Could not read projects.json:", error.message);
        res.status(500).json({ error: "Failed to load project data" });
    }
});

// POST: Handle contact form submissions
app.post('/api/contact', (req, res) => {
    console.log("[API] Contact received:", req.body);
    res.json({ message: 'Message received' });
});

// --- STATIC FILES & ERROR HANDLING ---

// Serve static files from the current directory
app.use(express.static(__dirname));

// 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found", path: req.url });
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`--------------------------------------------------`);
    console.log(`Portfolio Server running at http://localhost:${PORT}/`);
    console.log(`--------------------------------------------------`);
});