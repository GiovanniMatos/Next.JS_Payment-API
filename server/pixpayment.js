const express = require('express')
const app = express()
app.use(express.json());

var cors = require('cors')
app.use(cors());
require('dotenv').config()
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const { MercadoPagoConfig, Payment } = require('mercadopago'); // correct import
const client = new MercadoPagoConfig({ 
    accessToken: ACCESS_TOKEN, 
    options: { timeout: 5000, idempotencyKey: 'abc' } });
const payment = new Payment(client); //payment with your account

app.post('/pix-payment', async (req, res) => {

    const body =  { 
        transaction_amount: req.body.transaction_amount,
        description: req.body.description,
        payment_method_id: "pix",
            payer: {
            email: req.body.email,
            identification: {
        type: "cpf",
        number: req.body.number
    }}}

    try {
        const paymentResponse = await payment.create({ body });
        const ticketUrl = paymentResponse.point_of_interaction.transaction_data.ticket_url;
        res.redirect(ticketUrl)
    } catch (error) {
        console.error('Error during Pix payment:', error);
        res.status(500).send('Error during Pix payment');
    }
        
})


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});