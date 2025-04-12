const express = require('express');
const router = express.Router();

// Lawyer model (to be created)
const Lawyer = require('../models/Lawyer');

// Get all lawyers
router.get('/', async (req, res) => {
    try {
        const lawyers = await Lawyer.find();
        res.json(lawyers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching lawyers' });
    }
});

// Shortlist lawyer
router.post('/shortlist', async (req, res) => {
    const { lawyerId, clientId } = req.body;

    // Logic to handle the shortlist action (e.g., save to notifications)
    res.json({ message: `Lawyer ${lawyerId} shortlisted by client ${clientId}` });
});

module.exports = router;
