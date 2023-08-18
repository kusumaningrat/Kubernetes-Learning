const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('V2 is released');
});

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});