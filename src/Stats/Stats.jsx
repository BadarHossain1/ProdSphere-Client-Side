

const Stats = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-black"></span>
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by <span className="text-[#24A8DB]">People</span></h2>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>

                        <p className="mt-4 text-gray-500 sm:text-xl">
                            Explore the numbers behind our platforms success. From monthly sales volumes to customer satisfaction rates, our statistics reflect the growing demand for sustainable alternatives.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Monthly Sales</dt>

                                <dd className="text-4xl font-extrabold text-[#24A8DB] md:text-5xl">10,000</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Satisfaction Rate</dt>

                                <dd className="text-4xl font-extrabold text-[#24A8DB] md:text-5xl">95%</dd>
                            </div>

                            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Product Variety</dt>

                                <dd className="text-4xl font-extrabold text-[#24A8DB] md:text-5xl">500+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;