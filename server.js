const express = require('express');
const app = express();
const port = 3000;

// Root path endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Math API! Available operations: /add, /subtract, /multiply, /divide, /power, /sqrt, /mod');
});

// Helper function to validate numbers
const validateNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
};

// Addition endpoint
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  const result = parseFloat(num1) + parseFloat(num2);
  res.send({ result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  const result = parseFloat(num1) - parseFloat(num2);
  res.send({ result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  const result = parseFloat(num1) * parseFloat(num2);
  res.send({ result });
});

// Division endpoint
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  if (parseFloat(num2) === 0) {
    return res.status(400).send('Cannot divide by zero');
  }
  const result = parseFloat(num1) / parseFloat(num2);
  res.send({ result });
});

// Exponentiation endpoint
app.get('/power', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  const result = Math.pow(parseFloat(num1), parseFloat(num2));
  res.send({ result });
});

// Square root endpoint
app.get('/sqrt', (req, res) => {
  const { num1 } = req.query;
  if (isNaN(num1)) {
    return res.status(400).send('Invalid input number');
  }
  const result = Math.sqrt(parseFloat(num1));
  res.send({ result });
});

// Modulo operation endpoint
app.get('/mod', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).send('Invalid input numbers');
  }
  const result = parseFloat(num1) % parseFloat(num2);
  res.send({ result });
});

app.listen(port, () => {
  console.log(`Math API server listening at http://localhost:${port}`);
});