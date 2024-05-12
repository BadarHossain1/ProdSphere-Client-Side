import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import axios from "axios";


const AddQueries = () => {
    const { user } = useContext(AuthContext);
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const dateString = now.toLocaleString(); // Get the date as a string
            setCurrentDateTime(dateString);
        }, 1000); // Update every second
        // Update every second

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const ProductName = e.target.ProductName.value;
        const ProductBrand = e.target.ProductBrand.value;
        const ProductImageURL = e.target.ProductImageURL.value;
        const QueryTitle = e.target.QueryTitle.value;
        const BoycottingReasonDetails = e.target.BoycottingReasonDetails.value;
        const email = user?.email;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const dateTime = currentDateTime;
        const recommendationCount = "1";


        const queryInfo = {
            ProductName, ProductBrand, ProductImageURL, QueryTitle, BoycottingReasonDetails, recommendationCount, email, name, photoURL, dateTime
        }
        console.log(queryInfo);


        // axios.post('https://product-sphere-server.vercel.app/AddQuery', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(queryInfo)
        // }
        axios.post('https://product-sphere-server.vercel.app/AddQuery', queryInfo)

            .then(response => {
                console.log(response)
                toast.success('Query Added', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            })

    }

    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md font-Montserrat">
                <h2 className=" font-semibold font-Montserrat text-3xl capitalize text-[#24A8DB] ">Add Query: </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid">
                        <div className="flex justify-between mb-3 mt-4">
                            <div className="flex flex-col w-full">
                                <label className="">Product Name</label>
                                <input type="text" placeholder="Product Name" name="ProductName" className="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="">Product Brand</label>
                                <input type="text" placeholder="Product Brand" name="ProductBrand" className="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex justify-between mb-3 mt-4">
                            <div className="flex flex-col w-full">
                                <label className="">Product Image URL</label>
                                <input type="text" placeholder="Product Image URL" name="ProductImageURL" className="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="">Query Title</label>
                                <input type="text" placeholder="Query Title" name="QueryTitle" className="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex justify-between mb-3 mt-4 w-full">
                            <div className="flex flex-col w-[88%]">
                                <label className="">Boycotting Reason Details</label>
                                <input type="text" placeholder="Boycotting Reason Details" name="BoycottingReasonDetails" className="input input-bordered input-accent w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <button type='submit' className="group relative inline-block focus:outline-none focus:ring bg-transparent border-2  text-white mt-6  justify-end">
                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                                Add Query
                            </span>
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddQueries;
