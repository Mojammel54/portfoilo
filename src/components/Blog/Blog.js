import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="px-8" id='blog'>
                <div className="grid gap-8 items-start justify-center">
                    <span className="pr-6 text-black font-bold ">READ MY</span>
                    {/* <span className="pr-6 lg:hidden text-gray-100"> BLOG</span> */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative lg:px-7 lg:py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                            <span className="lg:flex items-centerspace-x-5">
                                <span className="lg:block hidden lg:pr-8 text-gray-100">BLOG</span>
                            </span>
                            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:text-xl font-semibold"> <span className='lg:hidden'>BLOG<br /></span> <span className='lg:hidden '>..................................................................... <br /> </span>Coming soon....</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;