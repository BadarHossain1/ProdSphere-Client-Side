import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyQuery from "./MyQuery";


const MyQueries = () => {

    const { user } = useContext(AuthContext);

    const [queries, setQueries] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/AddQuery/${user?.email}`)
            .then(response => response.json())
            .then(data => setQueries(data))
            .catch(err => console.log(err))

    }, [user?.email])
    return (
        <div className="font-Montserrat text-center">
            <div className="hero max-w-[1170px] mx-auto h-[300px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/9Yzf9HC/my-Queries.jpg)' }}>


                <div className="hero-overlay bg-opacity-50  rounded-lg"></div>
                <div className="z-0 flex w-[90%]  text-center space-y-6 gap-4 p-2 rounded-lg" >

                    <div className="mx-auto">

                        <p className="text-3xl  md:text-6xl  font-extrabold font-Montserrat text-[#fff]">Add Your Query!</p>

                        {/* <Link to='/' className="btn btn-ghost bg-gradient-to-r from-cyan-500 to-blue-500 text-white mt-6">All Queries</Link> */}
                        <Link to='/addQueries' className="group relative inline-block focus:outline-none focus:ring bg-transparent text-white mt-6" href="#">
                            <span
                                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
                            >
                                Add Queries
                            </span>
                        </Link>

                    </div>
                </div>
            </div>

            {/* here is my queries */}


            <span className="flex items-center mt-6 mb-6">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">            <p className="text-3xl font-extrabold">My <span className="text-[#24A8DB] mt-4 text-center">Queries</span></p>
</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            {
                queries.length > 0 ? <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        queries.map(query => <MyQuery key={query._id} query={query}></MyQuery>)
                    }

                </div> : <div>
                    <p className="text-center text-[#24A8DB] mt-10">You have no queries Please add a Query</p>
                    <Link to='/addQueries' className="group relative inline-block focus:outline-none focus:ring bg-transparent text-white mt-6 mb-10" href="#">
                        <span
                            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
                        >
                            Add Queries
                        </span>
                    </Link>

                </div>
            }








        </div>
    );
};

export default MyQueries;