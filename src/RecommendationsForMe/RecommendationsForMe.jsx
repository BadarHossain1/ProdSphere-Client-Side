import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const RecommendationsForMe = () => {
    const { user } = useContext(AuthContext)
    const [lists, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch(`https://product-sphere-server.vercel.app/recommendationsForMe/${user?.email}`)
        axios.get(`https://product-sphere-server.vercel.app/recommendationsForMe/${user?.email}`, { withCredentials: true })
            .then(res => res.data)
            .then(data => {

                setList(data);
                setLoading(false);
            });
    }, [user]);


    return (
        <div>
            <div className="mb-6">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10"> <span className="text-[#24A8DB] "> Recommendations</span> For Me</p>

                <hr className="border-1 mt-4 mb-16" />
                <div className=" ">



                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Posted By</th>
                                    <th>Date</th>


                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (<div className="w-full h-full flex justify-center items-center"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div> ):( lists.length>0?  lists.map(list => (
                                    <tr key={list._id}>
                                        <td>
                                            <img src={list.Image} alt={list.title} className="w-16 h-16 object-cover rounded-full" />
                                        </td>
                                        <td>
                                            <div>
                                                <p className="font-semibold">{list.Brand}</p>
                                                <p>{list.title}</p>
                                            </div>
                                        </td>
                                        <td>{list.RecommenderName}</td>
                                        <td>{list.dateAndTime}</td>



                                    </tr>
                                )) : <tr><td colSpan="4" className="text-center">No Recommendations found</td></tr>)}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default RecommendationsForMe;