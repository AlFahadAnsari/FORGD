import React from 'react'

const Detailspage = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row '>

                <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-28 bg-gray-300 rounded-xl">


                    {/*   first section */}

                    <div className=' mx-2 md:mx-14'>

                        <button className="btn btn-outline btn-white my-5 text-info rounded-lg">Schedule a consultation</button>


                        <h1 className='text-4xl'>An incubator with a dynamic product suite.</h1>


                        <p className='my-5 text-[17px]'>Forgd codifies best industry practices and makes them easy for any project to implement into their go-to-market playbook.</p>

                        <span className=' text-[17px] '><i className="fa-solid fa-check text-info mx-2"></i>
                            Build Tokenomics using quantitative models and historical data from past projects.</span>
                        <br /><br />

                        <span className=' text-[17px] '><i className="fa-solid fa-check text-info mx-2"></i>
                            Visualize & map protocol value flows and identify token demand drivers.</span>
                        <br /><br />

                        <span className=' text-[17px] '><i className="fa-solid fa-check text-info mx-2"></i>
                            Growth Capital workshops for token (ex: SAFT) & equity sales to accelerate development.</span>
                        <br /><br />

                        <span className=' text-[17px] '><i className="fa-solid fa-check text-info mx-2"></i>
                            Get listed on major CEXs & seed DEX liquidity pools.</span>

                    </div>
                </div>




                {/* second section  */}

                <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-28  mx-0 md:mx-10">
                    <img src="https://forgd.com/_nuxt/incubator.BmVgqv4u.webp" className='h-[600px] ' alt="" />
                </div>
            </div>
        </>
    )
}

export default Detailspage
