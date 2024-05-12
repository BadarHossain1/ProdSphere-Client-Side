import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
    const { user, LogoutUser, loading } = useContext(AuthContext);


    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleTheme = (e) => {


        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const handleLogout = () => {
        LogoutUser()
            .then(res => {
                console.log(res)
                axios.post('http://localhost:5173/logout', user, {
                    withCredentials:true
                })
                .then(res => res.data);
            }


            )
            .catch(error => console.log(error))
    }




    const hiddenNavLink = <>
        <li><Link to='/' className="hover:underline bg-transparent hover:text-[#24A8DB]  btn-ghost">Home</Link></li>
        <li> <Link to='/queries' className="hover:underline bg-transparent hover:text-[#24A8DB] btn-ghost">Queries</Link></li>
        <li> <Link to='/register' className="hover:underline bg-transparent hover:text-[#24A8DB] btn-ghost">Register</Link></li>
        <li><Link to='/myQueries' className="hover:underline bg-transparent hover:text-[#24A8DB] btn-ghost">My Queries</Link></li>
        <li><Link to='/myRecommendations' className="hover:underline bg-transparent hover:text-[#24A8DB] btn-ghost">My Recommendations</Link></li>
        {
            user ?
                <li className=""><Link to='/recommendationsForMe' className="hover:underline text-center bg-transparent hover:text-[#24A8DB]">Recommendations For Me</Link></li> : null
        }

        <label className="cursor-pointer grid place-items-center">
            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

    </>

    const navLink = <>

        <li><Link to='/' className="hover:underline bg-transparent hover:text-[#24A8DB]">Home</Link></li>
        <li className="" ><Link to='/queries' className="hover:underline bg-transparent hover:text-[#24A8DB]">Queries</Link></li>

        {
            user ?
                <li className=""><Link to='/recommendationsForMe' className="hover:underline text-center bg-transparent hover:text-[#24A8DB]" >Recommendations For Me</Link></li> : null
        }

    </>


    const leftNavLink = <>

        <li><Link to='/myQueries' className="hover:underline bg-transparent hover:text-[#24A8DB]">My Queries</Link></li>
        <li><Link to='/myRecommendations' className="hover:underline bg-transparent hover:text-[#24A8DB]">My Recommendations</Link></li>

    </>

    return (
        <div className="">
            <div className="navbar  max-w-[1000px] mx-auto mt-3 pb-2">
                <div className="navbar-start">

                    <div className="dropdown z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {hiddenNavLink}
                        </ul>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                </div>

                <Link to='/' className=" text-2xl md:text-3xl font-Montserrat font-extrabold flex justify-center space-x-0 
                 ">
                    <AiOutlineProduct className="text-[#24A8DB] text-4xl mr-1" />
                    <p>Prod</p>
                    <p className="text-[#24A8DB]">Sphere</p>
                </Link>




                {
                    loading ? <div className=" flex justify-end items-end mr-6"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div> : <div className="navbar-end">

                        {

                            user ?
                                <div className="flex ">


                                    <div className="navbar-center hidden md:flex">
                                        <ul className="menu menu-horizontal px-1 mt-1">
                                            {leftNavLink}
                                        </ul>
                                    </div>
                                    <label className="cursor-pointer  place-items-center hidden lg:grid mr-2">
                                        <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    </label>
                                    <div className="dropdown dropdown-end mr-4 flex">






                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={user?.displayName || 'No Name'}>
                                            <div className=" " data-tip={user?.displayName || 'No Name'}>
                                                {
                                                    user ? <img src={user?.photoURL || <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] border border-blue-600" />} className="w-full h-full rounded-full" /> : <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                                }
                                                {

                                                }
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ">
                                            <li className="text-center mb-1">{user?.displayName}</li>

                                            <li><Link to='/' onClick={handleLogout} className="hover:bg-blue-600 hover:text-white">Logout</Link></li>
                                        </ul>
                                    </div>
                                </div> : <div className="flex ml-2">

                                    <div className="flex items-center">
                                        <label className="cursor-pointer grid place-items-center mr-4">
                                            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                        </label>

                                        <div className="mr-1 md:mr-3 border-2 rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center border-blue-600 tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || 'No Name'}>
                                            <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] " />
                                        </div>
                                        <Link to='/login' className=" btn hover:bg-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</Link>


                                    </div>
                                </div>

                        }
                    </div>

                }


                {/* <div className="navbar-end">
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                        </ul>
                    </div>
                    <Link to='/register' className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white mr-2">Register</Link>
                    <Link to='/login' className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;