import { Link } from "react-router-dom";
import Query from "./Query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Queries = () => {
    const { user } = useContext(AuthContext);

    const [queries, setQueries] = useState([])
    const reverseData = () => {
        setQueries(prevData => [...prevData].reverse());
    };


    useEffect(() => {
        fetch(`http://localhost:5000/AddQuery`)
            .then(response => response.json())
            .then(data => setQueries(data))
            .catch(err => console.log(err))

    }, [user?.email])
    return (
        <div className="font-Montserrat text-center">


            {/* here is my queries */}


            <span className="flex items-center mt-6 mb-6">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">            <p className="text-4xl  font-extrabold"> <span className="text-[#24A8DB] mt-4 text-center">Queries</span></p>
                </span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            <div className="max-w-[1200px] text-right mb-4">
                <button onClick={reverseData} className=" btn hover:bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Descending</button>
            </div>

            {
                queries.length > 0 ? <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        queries.map(query => <Query key={query._id} query={query}></Query>)
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

export default Queries;