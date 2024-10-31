
export default function Header() {

    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Product Name</h2>
            <div className="lg:flex flex-wrap lg:justify-center lg:items-center">
                <img src="iphone-img-teste.jpg" alt="Image" className="w-full h-[15rem] lg:w-[31rem] lg:h-[22rem] object-cover object-center lg:mb-3" />
                <div className="w-full lg:w-1/2 xl:w-2/3 p-6 text-lg ml-[-1.5rem] lg:ml-[0.20rem]">
                    <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero id justo ullamcorper<br/> 
                        vulputate vel et mauris. Nulla facilisi. Donec quis turpis et lectus ullamcorper rutrum.
                    </p>
                    <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md">
                        <a href="#payMethods">Buy now</a>
                    </button>
                </div>
            </div>
        </>
    );
}