import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">
                        What our customers are saying about us
                    </h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                            >
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
                            </svg>
                            <p className="px-6 py-1 text-lg italic">


                                I have been an avid gardener for years and have always struggled to find the perfect combination of stylish and modern plants and pots. That is until I discovered Forestry, the ultimate destination for all my gardening needs. The website boasts a stunning collection of plants and pots that are not only super trendy but also designed to perfection. From sleek and chic to bold and beautiful, Forestry has it all. I am constantly impressed by the quality and variety of products available on the website. Whether I am looking for a statement piece or a simple addition to my collection, Forestry never disappoints. I highly recommend this website to all plant lovers out there. Trust me, you won't be disappointed!
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                            >
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600 " />
                        <p>Geethu Kv</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                            >
                                <path
                                    fill="currentColor"
                                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                                />
                            </svg>
                            <p className="px-6 py-1 text-lg italic">

                                I recently stumbled upon Forestry, a modern and stylish pot selling website, and I have to say, I am thoroughly impressed. As someone who appreciates traditional designs, I was pleasantly surprised to find a wide range of pots that perfectly blend modern aesthetics with traditional elements. The website's interface is user-friendly and easy to navigate, making my shopping experience a breeze. The quality of the pots is top-notch, and I can tell that a lot of thought and care has gone into each design. I have already recommended Forestry to all my friends and family, and I will definitely be a returning customer. Thank you, Forestry, for providing such a fantastic platform for pot enthusiasts like myself!
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                            >
                                <path
                                    fill="currentColor"
                                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                                />
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600" />
                        <p>Navodh CC</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonials
