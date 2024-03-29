const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(JSON.stringify(data));
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
