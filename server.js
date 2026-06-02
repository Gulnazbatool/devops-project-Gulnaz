const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

let counter = 0;

app.get('/', (req, res) => {
    counter++;

    res.send(`
        <h1>DevOps CI/CD Project</h1>
        <p>Timestamp: ${new Date()}</p>
        <p>Container ID: ${os.hostname()}</p>
        <p>Visitor Count: ${counter}</p>
    `);
});

app.get('/health', (req, res) => {
    res.send("Application Healthy");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});