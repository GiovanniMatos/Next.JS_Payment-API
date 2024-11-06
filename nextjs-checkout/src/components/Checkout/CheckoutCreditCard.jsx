"use client";

import { useState } from "react";

export default function CheckoutCreditCard(){

    const [cardNumber, setCardNumber] = useState()
    const [expMonth, setExpMonth] = useState()
    const [expYear, setExpYear] = useState()
    const [cvc, setCvc] = useState()

    function getCardNumber(event) {
        setCardNumber(event.target.value);
        console.log(event.target.value)
    }
    function getExpMonth(event) {
        setExpMonth(event.target.value);
    }
    function getExpYear(event) {
        setExpYear(event.target.value);
    }
    function getCvc(event) {
        setCvc(event.target.value);
    }

    async function payWithCard(event){
        event.preventDefault(); 
        try {
            const response = await fetch("https://next-js-payment-api.onrender.com/create-payment-intent", {
                method: "POST",
                headers: {
                    mode: "no-cors",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cardNumber: cardNumber,
                    expMonth: expMonth,
                    expYear: expYear,
                    cvc: cvc
                })
            });

            const data = await response.json();
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.error("Error during payment:", error);
        }
    }

    return(
        <>
        <h1 className="mb-1 text-left ml-[-1.5rem] lg:ml-[0.20rem]">Credit Card Payment</h1>
        <form onSubmit={payWithCard}>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="number"
                 className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 placeholder="Card Number"
                 onChange={getCardNumber}/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="exp_month"
                 className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 placeholder="Exp Month"
                 onChange={getExpMonth}/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="exp_year" 
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Exp Year"
                onChange={getExpYear}/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="cvc" 
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="CVC"
                onChange={getCvc}/>
            </div>
            <button type="submit" className="ml-[-1.5rem] lg:ml-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
        </form>
        </>
    )
}
