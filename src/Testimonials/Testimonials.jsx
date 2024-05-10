import { useEffect } from 'react';
import KeenSlider from 'keen-slider';

const Testimonials = () => {
    useEffect(() => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 1.5,
                        spacing: 32,
                    },
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');

        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());

        return () => {
            keenSlider.destroy();
        };
    }, []);

    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Don't just take our word for it...
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
                                harum porro optio fugit a culpa sunt id!
                            </p>

                            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                                <button
                                    aria-label="Previous slide"
                                    id="keen-slider-previous-desktop"
                                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"

                                        stroke="currentColor"
                                        className="size-5 rtl:rotate-180"
                                    >
                                        <path

                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                        />
                                    </svg>
                                </button>

                                <button
                                    aria-label="Next slide"
                                    id="keen-slider-next-desktop"
                                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                                >
                                    <svg
                                        className="size-5 rtl:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"

                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            <div id="keen-slider" className="keen-slider">
                                {/* Testimonial slides go here */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-4 lg:hidden">
                        <button
                            aria-label="Previous slide"
                            id="keen-slider-previous"
                            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <svg
                                className="size-5 -rotate-180 transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            aria-label="Next slide"
                            id="keen-slider-next"
                            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                            <div>badar</div>
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
