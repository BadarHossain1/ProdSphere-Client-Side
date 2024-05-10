

const Card = ({ query }) => {
    const { ProductName, ProductBrand, ProductImageURL, QueryTitle, BoycottingReasonDetails, email, name, photoURL, dateTime, _id } = query;


    return (
        <div>
            <div className="max-w-[370px] overflow-hidden rounded-lg shadow-md  mb-4 font-Montserrat">
                <img className="object-cover w-full h-64" src={ProductImageURL} alt="Article"></img>

                <div className="p-6">
                    <div className="">
                        <span className="text-xs  text-blue-600 uppercase dark:text-blue-400 font-bold" >{ProductName}</span>
                        <p className="text-xs font-medium   ">{ProductBrand}</p>
                        <p className="block mt-2 text-xl font-semibold transition-colors duration-300 transform " role="link">{QueryTitle}</p>
                        <p className="mt-2 text-sm ">{BoycottingReasonDetails}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={photoURL} alt="Avatar"></img>
                                <a href="#" className="mx-2 font-semibold " role="link">{name}</a>
                            </div>
                            <span className="mx-1 text-xs  ">{dateTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;