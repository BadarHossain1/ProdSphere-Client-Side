import { Typewriter } from "react-simple-typewriter";

const Testimonials = () => {

    return (
        <div>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Alternative Product Information System <span className="text-[#24A8DB]"><Typewriter
                                cursor
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                cursorColor="blue"


                                words={[
                                    'Testimonials',

                                ]}
                            /> </span></h2>
                            <p className="dark:text-gray-600">Discover what people are saying about our alternative product information system. Read testimonials from satisfied users who have experienced the benefits firsthand</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md ">
                                        <p>This system revolutionized the way we manage product data. It's intuitive, efficient, and has significantly improved our workflow.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">John Doe</p>
                                                <p className="text-sm dark:text-gray-600">Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>As a developer, I appreciate the flexibility and ease of integration this system offers. Its a game-changer for our development process.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Jane Smith</p>
                                                <p className="text-sm dark:text-gray-600">Software Engineer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p>Our team struggled with scattered product information until we implemented this system. Now, everything is centralized, organized, and easily accessible.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">Operation Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md ">
                                        <p>I have used several product information systems in the past, but none compare to this one. Its user-friendly, feature-rich, and has exceeded all our expectations.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Emily Johnson</p>
                                                <p className="text-sm dark:text-gray-600">Product Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
