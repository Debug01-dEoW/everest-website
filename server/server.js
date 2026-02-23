import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer'; // Added Nodemailer
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 3001; // Render will provide the port

app.use(cors());
app.use(express.json());

// Root route for verification
app.get('/', (req, res) => {
    res.send('Everest Website Backend is Running! 🚀');
});

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'deep082008.patel@gmail.com',
        pass: process.env.EMAIL_PASS || 'nebd bnnb jqft pfub'
    }
});

// Get all projects
app.get('/api/projects', (req, res) => {
    db.all("SELECT * FROM projects ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Submit an inquiry
app.post('/api/inquiries', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and Email are required" });
        return;
    }

    const sql = "INSERT INTO inquiries (name, email, subject, message) VALUES (?, ?, ?, ?)";
    const params = [name, email, subject, message];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        // --- NEW: Email Notification to Admin ---
        const mailOptions = {
            from: process.env.EMAIL_USER || 'deep082008.patel@gmail.com',
            to: process.env.EMAIL_USER || 'deep082008.patel@gmail.com',
            subject: `New Customer Inquiry: ${name}`,
            text: `You have received a new inquiry from Victory Composite Industries Website.\n\n` +
                `Details:\n` +
                `- Name: ${name}\n` +
                `- Email: ${email}\n` +
                `- Subject: ${subject}\n` +
                `- Message: ${message}\n\n` +
                `This inquiry has also been saved to the database.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Email notification failed:", error);
            } else {
                console.log("Email notification sent successfully:", info.response);
            }
        });
        // ----------------------------------------

        res.json({
            message: "success",
            id: this.lastID
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
