import sqlite3 from 'sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'everest.db');

const db = new sqlite3.Database(dbPath);

const newImageUrl = "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop";

db.run("UPDATE projects SET image = ? WHERE title = ?", [newImageUrl, "Arched GRC Facade"], function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Row(s) updated: ${this.changes}`);
    }
    db.close();
});
