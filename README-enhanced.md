 # Lawyer Hub

## Overview
Lawyer Hub is a comprehensive application designed to assist both lawyers and the general public in navigating the Indian judiciary system. The application features an AI chatbot that answers legal queries, a directory of lawyers, registration processes, and payment systems.

## Features
- AI Chatbot for legal queries related to the Indian Penal Code (IPC), fundamental rights, and duties.
- Lawyer directory with filtering options based on experience and case history.
- Registration process for lawyers and public users, including document uploads.
- Payment processing for registration fees.
- Notifications for lawyers when clients shortlist them.
- Access to case studies for law students and professionals.

## Project Structure
- **frontend/**: Contains HTML, CSS, and JavaScript files for the user interface.
- **backend/**: Contains server-side code for handling requests and database interactions.
- **database/**: Contains scripts for setting up the database schema.
- **ai_chatbot/**: Contains code for integrating the AI chatbot.

## Technologies Used
- Frontend: HTML, CSS (Tailwind CSS), JavaScript
- Backend: Node.js, Express
- Database: MongoDB
- AI Integration: OpenAI API (or similar)

## Installation
1. Clone the repository.
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd lawyer-hub/backend
   npm install express mongoose bcrypt jsonwebtoken cors body-parser
   ```
3. Set up MongoDB and ensure it is running.
4. Start the backend server:
   ```bash
   node app.js
   ```
5. Open the frontend files in a web browser to access the application.

## Usage
- Use the AI chatbot for legal queries.
- Register as a lawyer or public user to access additional features.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
