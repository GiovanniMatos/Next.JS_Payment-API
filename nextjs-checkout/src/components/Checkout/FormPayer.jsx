"use client";

import { useState } from "react";

export default function FormPayer(){

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    function getFullName(event) {
        setFullName(event.target.value);
    }
    function getEmail(event) {
        setEmail(event.target.value);
    }
    function getPhone(event) {
        setPhone(event.target.value);
    }

    async function createCostumer(event) {
        event.preventDefault();
        
        try {
            await fetch("https://testeuser111.pythonanywhere.com/create-costumer", {
                method: 'POST',
                headers: {
                    mode: "no-cors",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    phone: phone,
                })
            })
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return(
        <>
        <form onSubmit={createCostumer}>
            <div className="lg:mb-4 mb-1">
                <input type="text" id="fullName"
                    className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Full Name"
                    onChange={getFullName}/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="email" id="email"
                    className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="E-Mail Address"
                    onChange={getEmail}/>
            </div>
            <div className="lg:mb-4 mb-1">
                <input type="number" id="phone"
                    className="shadow appearance-none border rounded lg:w-full ml-[-1.5rem] w-[23.3rem] lg:ml-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Phone Number"
                    onChange={getPhone}/>
            </div>
            <div className="flex ml-[-1.5rem] lg:ml-[0.20rem]">
                <button type="submit" className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md">Register</button>
            </div>
        </form>
        </>
    )
}
