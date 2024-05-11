import { set } from "firebase/database";
import { useState } from "react";
import { Link } from "react-router-dom";


const MyQuery = ({ query }) => {



    const { ProductName, ProductBrand, ProductImageURL, QueryTitle, BoycottingReasonDetails, email, name, photoURL, dateTime, _id } = query;



    const handleDelete = (id) => {
        fetch(`http://localhost:5000/AddQuery/id/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);




            }
            )
    }

    return (
        <div>
            <div className="">
                <div className="card w-[370px] mx-auto lg:w-[370px] shadow-xl min-h-[500px] flex flex-col items-stretch mb-4">
                    <figure><img src={ProductImageURL} alt="Property" className="w-full h-[300px]" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title font-playfair-display font-bold flex justify-between">
                            {ProductName}
                            <div className="card-actions justify-end">
                                <div className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={name || 'No Name'}>
                                    <img src={photoURL} className="rounded-full" alt="" />

                                </div>
                            </div>
                        </h2>
                        <p className="text-start font-semibold ">{QueryTitle}</p>
                        <p className="text-start"> <span className="font-bold">Brand:</span>{ProductBrand}</p>
                        <p className="text-start"><span className="font-bold">Boycotting Reason</span> {BoycottingReasonDetails}</p>
                        <p className="text-start"><span className="font-bold">Date and Time:</span> {dateTime}</p>


                        <div className="flex justify-start mt-4 text-center">
                            <Link className="btn w-15 md:w-28 bg-gradient-to-r from-cyan-500 to-blue-500  text-[#fff] flex-grow">View Details</Link>
                            <Link to={`/update/${_id}`} className="btn w-15 md:w-28 bg-gradient-to-r from-cyan-500 to-blue-500  text-[#fff] flex-grow">Update</Link>
                            <button onClick={() => handleDelete(_id)} className="btn w-15 md:w-28 bg-gradient-to-r from-cyan-500 to-blue-500  text-[#fff] flex-grow">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyQuery;