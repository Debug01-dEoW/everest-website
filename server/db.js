import sqlite3 from 'sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'everest.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDatabase();
    }
});

function initializeDatabase() {
    db.serialize(() => {
        // Inquiries Table
        db.run(`CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

        // Projects Table
        db.run(`CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT,
      image TEXT,
      size TEXT DEFAULT 'small',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, () => {
            // Seed initial projects if empty
            db.get("SELECT COUNT(*) as count FROM projects", (err, row) => {
                if (row.count === 0) {
                    const initialProjects = [
                        ["The Glass Pavilion", "FRP Engineering", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop", "large"],
                        ["Arched GRC Facade", "Architectural GRC", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop", "small"],
                        ["Metro Dome Industrial", "Composite Roofing", "/project1.jpg", "small"],
                        ["Modern Oasis Villa", "Turnkey Prefab", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", "medium"]
                    ];
                    const stmt = db.prepare("INSERT INTO projects (title, category, image, size) VALUES (?, ?, ?, ?)");
                    initialProjects.forEach(p => stmt.run(p));
                    stmt.finalize();
                    console.log('Database seeded with projects.');
                }
            });
        });
    });
}

export default db;
