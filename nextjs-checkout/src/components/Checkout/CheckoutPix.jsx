"use client";

import { useState } from "react";

export default function CheckoutPix(){

  const [transaction_amount, setTransactionAmount] = useState();
  const [description, setDescription] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCPF] = useState();

  async function payWithPix(event){
    event.preventDefault(); 
    const response = await fetch("https://testeuser111.pythonanywhere.com/pix-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                transaction_amount: Number(transaction_amount),
                description: description || "",
                email: email,
                cpf: cpf
            })
          })
          const data = await response.json();
          window.location.href = data.ticket_url;
  }
  return(
      <>
      <h1 className="mb-1 text-left ml-[-1.5rem] lg:ml-[0.20rem]">Pix Payment</h1>
      <form onSubmit={payWithPix}>
          <div className="lg:mb-4 mb-1">
              <input type="number" id="transaction_amount"
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Transaction Amount"
                onChange={(e) => setTransactionAmount(Number(e.target.value))}/>
          </div>
          <div className="lg:mb-4 mb-1">
              <input type="text" id="description"
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Description (Not required)"
                onChange={(e) => { setDescription(e.target.value)}}/>
          </div>
          <div className="lg:mb-4 mb-1">
              <input type="email" id="email"
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="E-mail"
                onChange={(e) => { setEmail(e.target.value)}}/>
          </div>
          <div className="lg:mb-4 mb-1">
              <input type="number" id="cpf"
                className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="CPF"
                onChange={(e) => { setCPF(e.target.value)}}/>
          </div>
          <button type="submit" className="ml-[-1.5rem] lg:ml-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay Now</button>
      </form>
      </>
  )
}
