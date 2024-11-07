import stripe
from dotenv import load_dotenv
import os
load_dotenv()
STRIPE_TOKEN = os.environ.get("STRIPE_TOKEN")
stripe.api_key = STRIPE_TOKEN

from flask import Flask, redirect, request
app = Flask(__name__)

YOUR_DOMAIN = 'http://localhost:4242'

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
    app.run(port=4242)