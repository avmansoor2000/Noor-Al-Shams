import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    const paragraphStyles = {
        WebkitLineClamp: 6,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box"
    }

    const [isOpen, SetIsOpen] = useState(false);

    return (
        <div>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h3 className=' font-bold text-green-700'>Testimonials</h3>
                    <h1 className="text-2xl font-bold leading-none text-center">
                        What our customers are saying about us
                    </h1>
                </div>
                {/* <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2"> */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper h-auto w-full relative"

                    >
                        <SwiperSlide>
                            <div className="flex flex-col items-center mx-12 px-3 md:px-6 lg:mx-0 h-auto">
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
                                    <p className="px-6 py-1 text-lg italic" style={isOpen? null : paragraphStyles}>


                                        I have been an avid gardener for years and have always struggled to find the perfect combination of stylish and modern plants and pots. That is until I discovered Noor Al Shams, the ultimate destination for all my gardening needs. The website boasts a stunning collection of plants and pots that are not only super trendy but also designed to perfection. From sleek and chic to bold and beautiful, Noor Al Shams has it all. I am constantly impressed by the quality and variety of products available on the website. Whether I am looking for a statement piece or a simple addition to my collection, Noor Al Shams never disappoints. I highly recommend this website to all plant lovers out there. Trust me, you won't be disappointed!
                                    </p>
                                    <button  className=' text-gray-600 mt-3 '  onClick={()=>SetIsOpen(!isOpen)}>{ isOpen ? " Read less!": "Read more..."}</button>
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
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600 " />
                                <p>Sruthi kk
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  mx-12 px-3 md:px-6 lg:mx-0 h-auto">
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
                                    <p className="px-6 py-1 text-lg italic" style={isOpen? null : paragraphStyles}>

                                        I recently stumbled upon Noor Al Shams, a modern and stylish pot selling website, and I have to say, I am thoroughly impressed. As someone who appreciates traditional designs, I was pleasantly surprised to find a wide range of pots that perfectly blend modern aesthetics with traditional elements. The website's interface is user-friendly and easy to navigate, making my shopping experience a breeze. The quality of the pots is top-notch, and I can tell that a lot of thought and care has gone into each design. I have already recommended Noor Al Shams to all my friends and family, and I will definitely be a returning customer. Thank you, Noor Al Shams, for providing such a fantastic platform for pot enthusiasts like myself!
                                    </p>
                                    <button  className=' text-gray-600 mt-3 '  onClick={()=>SetIsOpen(!isOpen)}>{ isOpen ? " Read less!": "Read more..."}</button>
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
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600" />
                                <p>Navodh CC</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  mx-12 px-3 md:px-6 lg:mx-0 h-auto">
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
                                    <p className="px-6 py-1 text-lg italic" style={isOpen? null : paragraphStyles}>

                                       
I recently stumbled upon the perfect website for all my plant and pot needs - Noor Al Shams! As an avid plant lover, I am always on the lookout for high-quality and durable pots to house my green babies. And let me tell you, this website did not disappoint. The pots I purchased from Noor Al Shams are not only aesthetically pleasing, but they are also incredibly durable and long-lasting. I have had them for months now, and they still look as good as new. I am beyond impressed with the quality of their products. Thank you, Noor Al Shams, for providing such great products for all us plant enthusiasts. I highly recommend this website to anyone looking for top-notch plants and pots. Trust me, you won't be disappointed!
                                    </p>
                                    <button  className=' text-gray-600 mt-3 '  onClick={()=>SetIsOpen(!isOpen)}>{ isOpen ? " Read less!": "Read more..."}</button>
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
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600" />
                                <p>Mansoor</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  mx-12 px-3 md:px-6 lg:mx-0 h-auto">
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
                                    <p className="px-6 py-1 text-lg italic" style={isOpen? null : paragraphStyles}>

                                    I recently stumbled upon the most amazing plants and pots selling website, and I just had to share my experience with everyone. Noor Al Shams has completely transformed my home with their beautiful and affordable plants and pots. As a plant lover, I am always on the lookout for new additions to my collection, but it can be quite expensive. However, Noor Al Shams offers a wide variety of plants and pots at such affordable prices, making it possible for me to constantly update and refresh my indoor and outdoor spaces. Not only that, but their website is user-friendly and easy to navigate, making the shopping experience even more enjoyable. I highly recommend Noor Al Shams to anyone looking to add some greenery to their home without breaking the bank. Thank you, Noor Al Shams, for providing such high-quality products at such reasonable prices. You have gained a loyal customer in me!
                                    </p>
                                    <button  className=' text-gray-600 mt-3 '  onClick={()=>SetIsOpen(!isOpen)}>{ isOpen ? " Read less!": "Read more..."}</button>
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
                                <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600" />
                                <p>Imad </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                {/* </div> */}
            </section>

        </div>
    )
}

export default Testimonials
