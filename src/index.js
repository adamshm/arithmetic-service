const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/subtract/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/multiply/:n/:m', (req, res) => {
    res.json(Number(req.params.n) * Number(req.params.m));
});

app.get('/divide/:n/:m', (req, res) => {
    const dividend = Number(req.params.n);
    const divisor = Number(req.params.m);

    if (divisor === 0) {
        res.status(400).json({ error: 'Division by zero is not allowed' });
    } else {
        res.json(dividend / divisor);
    }
});

app.listen(port);