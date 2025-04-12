const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    experience: { type: Number, required: true },
    casesFought: { type: Number, required: true },
    address: { type: String, required: true },
    documents: { type: String, required: true }, // Path to uploaded documents
}, { timestamps: true });

module.exports = mongoose.model('Lawyer', lawyerSchema);
