import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li> <Link to='/'>Queries</Link></li>
        <li> <Link to='/register'>Register</Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 w-full mx-auto mt-2">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
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
                    <p>Product</p>
                    <p className="text-[#24A8DB]">Sphere</p>
                </Link>


                <div className="navbar-end">
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            
                        </ul>
                    </div>
                    <Link to='/register' className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white mr-2">Register</Link>
                    <Link to='/login' className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;