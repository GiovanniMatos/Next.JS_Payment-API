const express = require("express");
const app = express();
app.use(express.json());

var cors = require('cors')
app.use(cors());

require('dotenv').config()
const STRIPE_TOKEN = process.env.STRIPE_TOKEN

const stripe = require('stripe')(STRIPE_TOKEN);

app.post("/create-payment-intent", async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const fullName = req.body.fullName;
    const email = req.body.email;
    const number = req.body.cardNumber;
    const exp_month = req.body.expMonth;
    const exp_year = req.body.expYear;
    const cvc = req.body.cvc;
    console.log(firstName, lastName, fullName, email, number, exp_month, exp_year, cvc);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'brl',
        automatic_payment_methods: {
          enabled: true,
        },
    });
});

app.post("/create-costumer", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    console.log(name, email, phone);

    const customer = await stripe.customers.create({
        name: name,
        email: email,
        phone: phone,
    })
    .then(() => {
        console.log("Customer created successfully" + costumer);})
    .catch(err => {
            console.error("Error creating customer", err);});

});

// CHECKOUT SESSION - use IP data to change the currency (ipwhois API), some hook to change the quantity
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Product Name here',
            },
            unit_amount: 3000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
  
    res.redirect(303, session.url);
  });

app.listen(4000)
console.log("Server is running on http://localhost:4000");
