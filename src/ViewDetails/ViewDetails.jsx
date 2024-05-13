import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const { ProductName, ProductBrand, ProductImageURL, QueryTitle, BoycottingReasonDetails, email, name, photoURL, dateTime } = details;

    useEffect(() => {
        // fetch(`https://product-sphere-server.vercel.app/query/${id}`)
        axios.get(`https://product-sphere-server.vercel.app/query/${id}`, { withCredentials: true })
            .then(res => res.data)
            .then(data => {
                setDetails(data)
                setLoading(false);
            })
            .catch(error => console.log(error))

    }, [id])
    return (
        <div>
            {loading ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div> : ( <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={ProductImageURL}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24 space-y-6 font-Montserrat">
                            <h2 className="text-3xl font-extrabold sm:text-4xl">{QueryTitle}</h2>

                            <p className=""><span className="font-bold text-lg">Product Name: </span> {ProductName}</p>
                            <p><span className="font-bold text-lg">Product Brand: </span>{ProductBrand}</p>


                            <p className="mt-4 ">
                                {BoycottingReasonDetails}
                            </p>

                            <p><span className="font-bold text-lg">Date:  </span>{dateTime}</p>

                            <div className="card-actions justify-start">
                                <div className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={name || 'No Name'}>
                                    <img src={photoURL} className="rounded-full" alt="" />

                                </div>
                                <div className="flex  flex-col">
                                    <p className="font-extrabold font-sans">Created By: {name}</p>
                                    <p className="font-semibold font-serif">Email: {email}</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section> )
            }
        </div>
    );
};

export default ViewDetails;