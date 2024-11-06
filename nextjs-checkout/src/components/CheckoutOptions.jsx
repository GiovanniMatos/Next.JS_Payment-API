"use client";

import { useState } from 'react';
import CheckoutCreditCard from "./Checkout/CheckoutCreditCard";
import CheckoutPix from "./Checkout/CheckoutPix"
import FormPayer from "./Checkout/FormPayer"

export default function DefaultCheckout(){
    const [activeTab, setActiveTab] = useState(""); // Estado para a aba ativa

    const tabs = [
        { label: "Credit Card", value: "creditCard" },
        // { label: "Default Checkout", value: "defaultcheckout" },
        { label: "Pix", value: "pix" },
        { label: "PayPal", value: "paypal" }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "creditCard":
                return <CheckoutCreditCard />;
            case "pix":
                return <CheckoutPix />; 
            case "paypal":
                return <div>Conteúdo para PayPal</div>;
            case "register":
                return <FormPayer />;
            default:
                return(""); 
        }
    };

    return(
        <>
        <div className="w-full lg:w-1/2 xl:w-2/3 p-6 text-lg text-left" id="payMethods">
            <h2 className="text-2xl font-bold mb-2 text-left flex ml-[-1.5rem] lg:ml-[-1.4rem]">
                <span>
                    <li onClick={() => setActiveTab("register")} className="text-orange-600 cursor-pointer list-none mr-1">Register</li>    
                </span>
                before paying
            </h2>
            {renderContent()}
            <ul className="flex space-x-4 mb-4 ml-[-1.5rem] lg:ml-[-1.4rem] mt-5">
                {tabs.map((tab) => (
                    <li key={tab.value} className={`cursor-pointer ${activeTab === tab.value ? 'font-bold' : ''} hover:text-orange-500 hover:font-bold`} onClick={() => setActiveTab(tab.value)}>
                        {tab.label}
                    </li>
                ))}
                <form action="https://next-js-payment-api.onrender.com/create-checkout-session" method="POST">
                    <button type="submit" className="hover:text-orange-500 hover:font-bold`">Checkout</button>
                </form>
            </ul>
        </div>
        </>
    )
}
