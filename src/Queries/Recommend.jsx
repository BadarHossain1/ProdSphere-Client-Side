import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


const Recommend = () => {



    const data = useLoaderData();

    const { user } = useContext(AuthContext);


    const { ProductName, ProductBrand, ProductImageURL, QueryTitle, BoycottingReasonDetails, email, name, photoURL, dateTime, _id, recommendationCount } = data;

    const [recommendations, setRecommendations] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/AddRecommendation/${_id}`)
            .then(res => res.json())
            .then(data => setRecommendations(data))
    }, [_id])



    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const productName = e.target.productName.value;
        const Image = e.target.Image.value;
        const reason = e.target.reason.value;
        const RecommenderEmail = user?.email;
        const RecommenderName = user?.displayName;
        const RecommenderPhotoURL = user?.photoURL;
        const dateAndTime = new Date().toLocaleString();


        //creator details
        const id = _id;




        const creatorName = name;
        const creatorEmail = email;
        const creatorPhotoURL = photoURL;
        const creatorDateTime = dateTime;
        const creatorRecommendationCount = parseInt(recommendationCount);



        const allInfo = {
            title, productName, Image, reason, RecommenderEmail, RecommenderName, RecommenderPhotoURL, dateAndTime, creatorName, creatorEmail, creatorPhotoURL, creatorDateTime, creatorRecommendationCount, id, QueryTitle, ProductName
        }

        console.log(allInfo);


        fetch('http://localhost:5000/AddRecommendation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allInfo)

        })
            .then(response => {
                console.log(response)
                toast.success('Recommendation Added', {
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
            )
            .catch(err => {
                console.log(err)
                toast.error('Error Adding Recommendation', {
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
            )



    }


    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={ProductImageURL}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24 space-y-6 font-Montserrat">
                            <h2 className="text-3xl font-extrabold sm:text-4xl">{QueryTitle}</h2>

                            <p className=""><span className="font-bold text-lg">Product Name: </span> {ProductName}</p>
                            <p><span className="font-bold text-lg">Product Brand: </span>{ProductBrand}</p>


                            <p className="mt-4 ">
                                {BoycottingReasonDetails}
                            </p>

                            <p><span className="font-bold text-lg">Date:  </span>{dateTime}</p>
                            <p><span className="font-bold text-lg text-[#24A8DB]">Recommendation Count : </span> {recommendations.length}</p>

                            <div className="card-actions justify-start">
                                <div className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={name || 'No Name'}>
                                    <img src={photoURL} className="rounded-full" alt="" />

                                </div>
                                <div className="flex  flex-col">
                                    <p className="font-extrabold font-sans">Created By: {name}</p>
                                    <p className="font-semibold font-serif">Email: {email}</p>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



            {/* add a recommendation */}


            <div className="mt-10 pb-10">
                <span className="flex items-center mt-6 mb-6 font-Montserrat">
                    <span className="h-px flex-1 bg-black"></span>
                    <span className="shrink-0 px-6">            <p className="text-4xl  font-extrabold"> <span className="text-[#24A8DB] mt-4 text-center">Add Recommendation</span></p>
                    </span>
                    <span className="h-px flex-1 bg-black"></span>
                </span>


                <form onSubmit={handleSubmit} className="w-3/4 mx-auto mb-10">
                    <div className="flex flex-col lg:flex-row justify-center gap-4  mb-6">


                        <input type="text" placeholder="Recommendation Title" name="title" className="input input-bordered input-info w-full max-w-xs" />

                        <input type="text" placeholder="Recommendation Product Name" name="productName" className="input input-bordered input-info w-full max-w-xs" />
                    </div>




                    <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">

                        <input type="text" placeholder="Recommendation Product Image" name="Image" className="input input-bordered input-info w-full max-w-xs" />

                    </div>
                    <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">
                        <textarea className="textarea textarea-info w-2/3" placeholder="Recommendation Reason" name="reason"></textarea>

                    </div>
                    <div className="form-control mt-6 w-2/4 mx-auto">
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Add Recommendation</button>
                        {/* Toast */}
                    </div>
                </form>




            </div>



            {/* ALL RECOMMENDATIONS FOR THAT PARTICULAR QUERY */}
            <span className="flex items-center mt-10 mb-6 font-Montserrat ">
                <span className="h-px flex-1 bg-black"></span>
                <span className="shrink-0 px-6">            <p className="text-4xl  font-extrabold"> <span className="text-[#24A8DB] mt-4 text-center"> Recommendations</span></p>
                </span>
                <span className="h-px flex-1 bg-black"></span>
            </span>

            {
                recommendations.map(recommendation => <article key={recommendation.id} className="flex bg-white transition hover:shadow-xl mb-4">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time

                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                            <span>Date:</span>
                            <span className="w-px flex-1 bg-gray-900/10"></span>
                            <span>{recommendation.dateAndTime}</span>
                        </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                        <img
                            alt=""
                            src={recommendation.Image}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                    {recommendation.title}
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {recommendation.reason}
                            </p>
                        </div>
                        <div className="card-actions justify-start">
                            <div className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={recommendation.RecommenderName || 'No Name'}>
                                <img src={recommendation.RecommenderPhotoURL} className="rounded-full" alt="" />

                            </div>
                            <div className="flex  flex-col">
                                <p className=" font-sans">Created By: {recommendation.RecommenderName}</p>
                                <p className=" font-serif">Email: {recommendation.RecommenderEmail}</p>

                            </div>
                        </div>


                    </div>
                </article>
                )
            }



        </div>
    );
};

export default Recommend;