import React from 'react';
import { Link } from 'react-router-dom';

const Template = () => {
    return (
        <div className=''>
            <div className='w-100 flex flex-col md:flex-row relative' id='template' style={{ backgroundImage: 'url("https://forgd.com/images/homepage/hero.webp")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '10px', margin: '0 25px', marginTop: '25px' }}>
                <div className='w-full md:w-1/2 mt-72 md:mx-20 p-5 pb-24'>
                    <h1 className='text-4xl md:text-7xl flex justify-start min-w-24 mt-30 text-white'>
                        The end-to-end software toolkit to optimize token & protocol performance
                    </h1>

                    <p className='mt-5 text-white'>Forgd is a one-stop destination for all pre & post-TGE support to drive long term success. Interact with self-service products complemented by white-glove support from Forgd professionals.</p>

                    <button className="btn btn-active btn-info mx-4 mt-5 text-white">Join Forgd</button>

                    <button className="btn btn-outline btn-white mt-5 text-white">Schedule a consultation</button>


                </div>

            </div>




            <h1 className='text-center text-5xl mt-20'><i class="fa-brands fa-algolia fa-flip-vertical"></i></h1>
            <div className='text-center min-w-20 mt-20 md:mt-5 md:w-[700px] flex items-center justify-center center h-[250px] mx-auto'>
                <h1 className='text-6xl '>
                    Holistic support, for pre-TGE & listed projects, <span className="text-blue-500">every step of the way</span>
                </h1>
            </div>



            <div class="text-center mt-20 md:mt-0">
                <Link to={'/signup'} className="btn btn-active bg-black mt-5 md:mt-0 text-white outline-none border-none rounded-full">Sign up free</Link>
            </div>



        </div>
    );
};

export default Template;
