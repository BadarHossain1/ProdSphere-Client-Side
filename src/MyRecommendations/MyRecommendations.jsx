import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext)
    const [lists, setList] = useState([]);
    useEffect(() => {
        // fetch(`https://product-sphere-server.vercel.app/myRecommendations/${user?.email}`)
        axios.get(`https://product-sphere-server.vercel.app/myRecommendations/${user?.email}`, { withCredentials: true })

            .then(res => res.data)
            .then(data => {

                setList(data);
            });
    }, [user]);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch(`https://product-sphere-server.vercel.app/myRecommendations/${id}`, {
                //     method: 'DELETE',
                // })
                axios.delete(`https://product-sphere-server.vercel.app/myRecommendations/${id}`, {withCredentials: true})
                    .then(res => {
                        console.log(res);

                        setList(prevLists => prevLists.filter(item => item._id !== id));
                    })
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .catch(error => {
                        console.error('Error deleting:', error);
                    });
            }
        });
    }
    return (
        <div>
            <div className="mb-6">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10">My <span className="text-[#24A8DB] "> Recommendations</span></p>

                <hr className="border-1 mt-4 mb-16" />
                <div className=" ">

                    {/* {lists.map(list => <List key={list._id} list={list}></List>)} */}

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

                                        <td><button onClick={() => handleDelete(list._id)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Delete</button></td>

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

export default MyRecommendations;