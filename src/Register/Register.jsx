import { useContext } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Marquee from "react-fast-marquee";

const Register = () => {

    const { CreateUser, UpdateProfile, GoogleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const from = '/';




    //navigate here
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    const notify = (success) => {
        if (success) {
            toast.success('User Created Successfully', {
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
        }
        else {
            toast.error('Error Creating User', {
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

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;

        const userInfo = {
            name, email, password, photoURL
        }
        console.log(userInfo);


        if (passwordRegex.test(password)) {
            CreateUser(email, password)
                .then(res => {
                    console.log(res.user)
                    notify(true);
                    //NAVIGATE HERE AS WELL AND FIX ERROR
                    navigate(from)



                    UpdateProfile(name, photoURL)
                        .then(result => {
                            console.log('user updated', result.user);
                            // navigate(from)
                            navigate(from)
                        })
                        .catch(error => {
                            console.log('Error while update', error);


                        })

                })

                .catch(error => {
                    console.log(error);
                })
        }
        else {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.', {
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
        }



    }
    const GoogleSignIn = e => {
        e.preventDefault();

        GoogleLogin()
            .then(result => {
                console.log('User Google signed In', result.user);
                notify(true)
                 navigate(from)


            })
            .catch(error => {
                console.log('google error', error);
                notify(false);
            })
    }



    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex w-full max-w-sm mx-auto overflow-hidden t rounded-lg shadow-lg lg:max-w-4xl mb-10">
            <div className="hidden bg-cover lg:block lg:w-1/2 mr-5" style={{ backgroundImage: "url('https://i.ibb.co/QcPdnWB/register.jpg')" }}>

            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <AiOutlineProduct className="text-[#24A8DB] text-4xl mr-1" />
                </div>

                <Marquee>
                    <p className="mt-3 text-xl text-center font-bold font-Montserrat">
                        Welcome to ProdSphere
                    </p>
                </Marquee>

                <button onClick={GoogleSignIn} className="flex w-full btn-ghost items-center justify-center mt-4  transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50 ">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 text-[#24A8DB] font-bold text-center">Sign in with Google</span>
                </button>

                <div className="flex items-center justify-between mt-4 ">
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>

                    <a className="text-xs text-center  uppercase dark:text-gray-400 hover:underline">or
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={handleSubmit} className="text-center ">
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium " >Name</label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered input-info  w-5/6" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium " >Photo</label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered input-info  w-5/6" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium " >Email Address</label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered input-info  w-5/6" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-center text-center  ">
                            <label className="block mb-2 text-sm  font-medium " >Password</label>

                        </div>

                        <input type="password" placeholder="Password" name="password" className="input input-bordered input-info  w-5/6" />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 bg-gradient-to-r from-cyan-500 to-blue-500">
                            Sign Up
                        </button>
                        <ToastContainer />
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to='/login' className="text-xs font-Montserrat font-extrabold text-[#24A8DB]  hover:underline"> Have an Account?</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default Register;
