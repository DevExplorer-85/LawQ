const express = require('express');
const router = express.Router();

// Chat route
router.post('/', (req, res) => {
    const userQuery = req.body.query;

    // Simulate a response from the AI chatbot
    const response = `This is a simulated response to your question: "${userQuery}"`;
    res.json({ response });
});

module.exports = router;
