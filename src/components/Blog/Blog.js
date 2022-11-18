import React from 'react';

const Blog = () => {
    return (
        <div>

            <div class="px-8">
                <div class="grid gap-8 items-start justify-center">
                    <span class="pr-6 text-black font-bold ">READ MY</span>
                    {/* <span class="pr-6 lg:hidden text-gray-100"> BLOG</span> */}
                    <div class="relative group">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button class="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                            <span class="lg:flex items-centerspace-x-5">
                                <span class="lg:block hidden pr-8 text-gray-100">BLOG</span>
                            </span>
                            <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold"> <span className='lg:hidden'>BLOG<br /></span> <span className='lg:hidden '>..................................................................... <br /> </span>Coming soon....</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;