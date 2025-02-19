import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="bg-white ">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                   
                    <a href="https://ibb.co/5B5WK6K"><img src="https://i.ibb.co/Chn5PzP/404.jpg" alt="404" border="0" /></a>
                    <h1 className=" text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesnt exist. Here are some helpful links:</p>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link to='/' className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  className="w-5 h-5 rtl:rotate-180">
                                <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>


                            <span>Go back</span>
                        </Link>

                        <Link to='/' className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600  bg-gradient-to-r from-cyan-500 to-blue-500">
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;