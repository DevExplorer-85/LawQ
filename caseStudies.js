const express = require('express');
const router = express.Router();

// Case Study model (to be created)
const CaseStudy = require('../models/CaseStudy');

// Get all case studies
router.get('/', async (req, res) => {
    try {
        const caseStudies = await CaseStudy.find();
        res.json(caseStudies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching case studies' });
    }
});

module.exports = router;
