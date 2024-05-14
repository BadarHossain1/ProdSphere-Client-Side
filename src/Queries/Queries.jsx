import { Link } from "react-router-dom";
import Query from "./Query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const Queries = () => {
    const { user } = useContext(AuthContext);
    const [layout, setLayout] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleLayout = () => {
        setLayout(!layout);
    }

    const [queries, setQueries] = useState([])
    // const reverseData = () => {
    //     setQueries(prevData => [...prevData].reverse());
    // };


    useEffect(() => {
        // fetch(`https://product-sphere-server.vercel.app/AddQuery`)
        axios.get(`https://product-sphere-server.vercel.app/AddQuery`, { withCredentials: true })
            .then(response => response.data)
            .then(data => {
                setQueries(data)
                setQueries(prevData => [...prevData].reverse());
                setLoading(false);
            })
            .catch(err => console.log(err))

    }, [user?.email])


    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.Search.value;


        const filteredData = queries.filter(query => query.ProductName.toLowerCase().includes(search.toLowerCase()));
        setQueries(filteredData);

    }
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="font-Montserrat text-center">


            {/* here is my queries */}


            <span className="flex items-center mt-6 mb-6">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">            <p className="text-4xl  font-extrabold"> <span className="text-[#24A8DB] mt-4 text-center">Queries</span></p>
                </span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            <div className="w-[90%] mx-auto flex justify-between">
                <div>
                    <form onSubmit={handleSearch} className="w-full space-y-1 dark:text-gray-800">
                        <label htmlFor="Search" className="hidden">Search The Title. e.g: Grocery Bags</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search e.g: Grocery Bags" className="w-44 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                        </div>
                    </form>
                </div>



                <div className="max-w-[1200px]  mb-4">
                    <button onClick={handleLayout} className=" btn hovLer:bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Change Layout</button>
                </div>
            </div>
            {
                loading ? (<div className="w-full h-full flex justify-center items-center"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div>) : (
                    
                        queries.length > 0 ? <div className={`max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 ${layout ? "lg:grid-cols-2" : "lg:grid-cols-3"} `}>
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
                    
                )
            
        }







        </div>
    );
};

export default Queries;