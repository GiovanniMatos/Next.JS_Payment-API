from dotenv import load_dotenv
import os
load_dotenv()

# IMPORT STRIPE SDK
import stripe
STRIPE_TOKEN = os.environ.get("STRIPE_TOKEN")
stripe.api_key = STRIPE_TOKEN

# IMPORT MERCADO PAGO SDK
import mercadopago
ACCESS_TOKEN = os.environ.get("ACCESS_TOKEN")
sdk = mercadopago.SDK(ACCESS_TOKEN)

# SERVER ROUTES
from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

YOUR_DOMAIN = 'http://localhost:5000'

@app.route('/pix-payment', methods=['POST'])
def pixPayment():
    data = request.get_json()
    print("Received data:", data)

    email = data.get('email')
    cpf = data.get('cpf')
    print("Email and CPF received: ", email, cpf)

    payment_data = {
        "transaction_amount": 30,
        "description": "description",
        "payment_method_id": "pix",
        "payer": {
            "email": email,
            "first_name": "Test First Name",
            "last_name": "Test Last Name",
            "identification": {
                "type": "CPF",
                "number": cpf
            }
        }
    }
    payment_response = sdk.payment().create(payment_data)
    # print("Payment response:", payment_response)
    ticketUrl = payment_response['response']['point_of_interaction']['transaction_data']['ticket_url']
    print(ticketUrl)

# Create a checkout session
@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            success_url="https://example.com/success",
            line_items=[
                {
                "price_data": {
                        "currency": "usd", 
                        "product_data": {
                        "name": 'Product Name here',
                        },
                        "unit_amount": 3000,
                    },
                "quantity": 1
                }],
            mode="payment",
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=5000)