

export default function Description(){
    return(
        <>
            <div className="container lg:flex justify-between mb-4">
                <div className="lg:w-3/4 text-lg">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed et libero id justo ullamcorper vulputate vel et mauris. 
                        Nulla facilisi. Donec quis turpis et lectus ullamcorper rutrum..
                    </p>
                </div>
                <div className="lg:w-[70%]">
                    <img src="iphone-img-teste.jpg" alt="Image"/>
                </div>
            </div>

            <div className="container lg:flex justify-between">
                <div className="lg:w-[70%]">
                    <img src="iphone-img-teste.jpg" alt="Image"/>
                </div>
                <div className="lg:w-3/4 text-lg">
                    <p className="lg:ml-14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed et libero id justo ullamcorper vulputate vel et mauris. 
                        Nulla facilisi. Donec quis turpis et lectus ullamcorper rutrum.
                    </p>
                </div>
            </div>
        </>
    );
}