import React from 'react';
import Carousel from '../Projects/Carousel';

const ShowDetails = ({ detail, id }) => {

    console.log(detail)
    return (
        <div>
            {

                id === detail.cid && <div>
                    <p className='text-3xl uppercase mt-5 font-bold mb-5'>{detail.name}</p>

                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic1} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic2} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic3} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic4} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic5} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-full">
                            <img src={detail?.pic?.[0].pic6} className="w-full" alt='' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                    <div className='lg:grid grid-cols-3 text-3xl text-orange-600 font-bold mt-8'>

                        <div className="px-8">
                            <div className="grid gap-8 items-start justify-center">


                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">

                                        <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold shadow-2xl shadow-orange-600"> <a className='btn btn-outline btn-sm btn-info text-white font-extrabold' href={detail?.live}>Live Link</a></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="grid gap-8 items-start justify-center">


                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">

                                        <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold shadow-2xl shadow-orange-600"> <a className='btn btn-outline btn-sm btn-info text-white font-extrabold' href={detail?.gc}>Git ClientLink</a></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="grid gap-8 items-start justify-center">

                                {/* <span className="pr-6 lg:hidden text-gray-100"> BLOG</span> */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">

                                        {
                                            detail?.gs &&
                                            <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold shadow-2xl shadow-orange-600"> <a className='btn btn-outline btn-sm btn-info text-white font-extrabold' href={detail?.gs}>Git Server Link</a></span>

                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="px-8 mt-12">
                        <div className="grid gap-8 items-start justify-center">


                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <div className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                                    <span className="lg:flex items-centerspace-x-5">
                                        <span className="lg:block pr-8 text-gray-100">Technologies</span>
                                    </span>
                                    <div className='lg:grid grid-cols-8 p-2'>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">1.{detail.use[0].f1}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">2.{detail.use[0].f2}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">3.{detail.use[0].f3}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">4.{detail.use[0].f4}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">5.{detail.use[0].f5}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">6.{detail.use[0].f6}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">7.{detail.use[0].f6}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">8.{detail.use[0].f7}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">9.{detail.use[0].f8}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">10.{detail.use[0].f9}</span>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">11.{detail.use[0].f10}</span>
                                        {detail.use[0].f11 && <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">12.{detail.use[0].f11}</span>}
                                        {detail.use[0].f13 && <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">13.{detail.use[0].f13}</span>}
                                        {detail.use[0].f14 && <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">14.{detail.use[0].f14}</span>}
                                        {detail.use[0].f15 && <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-1 ">15.{detail.use[0].f15}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-8 items-start justify-center">
                           

                            <div className="relative group mt-8">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <div className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                                    <span className="lg:flex items-centerspace-x-5">
                                        <span className="lg:block  pr-2 text-gray-100">Over View</span>
                                    </span>
                                    <div className=''>
                                        <span className="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-1 grid grid-cols-1">1.{detail.feature[0].f1}
                                            <span className='block mt-2'>2.{detail.feature[0].f2}</span>
                                            <span className='block mt-2'>3.{detail.feature[0].f3}</span>
                                            <span className='block mt-2'>4.{detail.feature[0].f4}</span>
                                            {detail.feature[0].f5 && <span className='block mt-2'>5.{detail.feature[0].f5}</span>}
                                            {detail.feature[0].f6 && <span className='block mt-2'>6.{detail.feature[0].f6}</span>}
                                            {detail.feature[0].f7 && <span className='block mt-2'>7.{detail.feature[0].f7}</span>}
                                            {detail.feature[0].f8 && <span className='block mt-2'>8.{detail.feature[0].f8}</span>}

                                            {detail.feature[0].f9 && <span className='block mt-2'>9.{detail.feature[0].f9}</span>}
                                            {detail.feature[0].f10 && <span className='block mt-2'>10.{detail.feature[0].f10}</span>}
                                            {detail.feature[0].f11 && <span className='block mt-2'>11.{detail.feature[0].f11}</span>}
                                            {detail.feature[0].f12 && <span className='block mt-2'>12.{detail.feature[0].f12}</span>}
                                            {detail.feature[0].f13 && <span className='block mt-2'>13.{detail.feature[0].f13}</span>}



                                        </span>


                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>



                </div>

            }
        </div>
    );
};

export default ShowDetails;