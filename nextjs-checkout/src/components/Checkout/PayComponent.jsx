

export default function PayComponent(){
    return(
        <>
        <h2 className="text-2xl font-bold mb-2 text-left ml-[-1.5rem] lg:ml-[0.20rem]">Register before paying</h2>
        {renderContent()}
        <ul className="flex space-x-4 mb-4 ml-[-1.5rem] lg:ml-[0.20rem] mt-5">
            {tabs.map((tab) => (
                <li key={tab.value} className={`cursor-pointer ${activeTab === tab.value ? 'font-bold' : ''}`} onClick={() => setActiveTab(tab.value)}>
                    {tab.label}
                </li>
            ))}
            <form action="http://localhost:4000/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
            </form>
            <li onClick={() => setActiveTab("register")} className="text-orange-600 cursor-pointer">Register</li>
        </ul>
        </>
    )
}