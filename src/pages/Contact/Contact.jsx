import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import banner1 from '../../assets/img/banner/banner1.jpg'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="bg-gray-200 pt-12">
                <div className="container grid gap-12 items-center px-6 py-12 mx-auto lg:grid-cols-4">
                    <div className=' text-center lg:text-left'>
                        <h1 className="font-medium text-4xl text-blue-500 dark:text-blue-800">Contact us</h1>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                            We’d love to hear from you
                        </h1>
                        <p className="mt-3 text-gray-500 dark:text-gray-500">
                            Our friendly team is always here to chat.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:col-span-2 sm:grid-cols-2 ">
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-700">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                Chat to sales
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Speak to our friendly team.
                            </p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                info@forestry.ae
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                Chat to support
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                We’re here to help. Whatsapp us on
                            </p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                +91 9539987128
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                Visit us
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Visit our office HQ..
                            </p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                Dar Al Zain Flowers LLC
                                Al Karama, Dubai
                                Ph: 04 589 8156,    P.O Box No : 49737
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-700">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                                Call us
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Mon-Fri from 8am to 5pm.
                            </p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                                +971 56 402 0714
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

        </div>
    )
}

export default Contact
