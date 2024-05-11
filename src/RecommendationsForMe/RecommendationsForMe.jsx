import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";

const RecommendationsForMe = () => {
    const { user } = useContext(AuthContext)
    const [lists, setList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/recommendationsForMe/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setList(data);
            });
    }, [user]);

    
    return (
        <div>
            <div className="mb-6">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10">My <span className="text-[#24A8DB] "> Recommendations</span></p>

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
                                {lists.map(list => (
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
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default RecommendationsForMe;