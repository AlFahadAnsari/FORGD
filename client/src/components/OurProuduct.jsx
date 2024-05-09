import React from 'react'

const OurProuduct = () => {
    return (
        <>

            <div className=' pb-28' style={{ backgroundImage: 'url("https://forgd.com/_nuxt/forgd-tools-bg.Tcl8UNkD.webp")' , backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '10px', margin: '0 25px', marginTop: '25px' }}>



                <main className="flex justify-center items-center text-white">
                    <h1 className=" text-2xl md:text-4xl mt-14 md:mt-40 font-bold text-center w-[800px]">
                        “Gone are the days of paying five advisors, and two market makers. Forgd does it all with transparency & seamless UX.”
                    </h1>

                </main>
                <h6 className='text-white text-center mt-4'>Ben Sparango | Head of Ecosystem Strategy, Solana Foundation</h6>

                <h1 className='mt-36 text-white text-center text-6xl md:text-8xl'>  Become a subject <br /> matter expert</h1>


                {/*  2 parts  */}


                <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row '>

                    <div className="w-full md:w-1/2 mt-12 md:mt-28 rounded-xl">

                        <button className="btn btn-outline btn-white my-5 text-info rounded-lg">Schedule a consultation</button>

                        <h4 className='text-white text-2xl'>ioperate a blockchain project without external support. We can help.operate a blockchain project without external support. We can help.</h4>

                        <h3 className='text-white text-1xl mt-16'>Forgd maintains a holistic library of all things related to pre-TGE activities and post-listing best practices. We author educational guides in-house based on our first-hand experience and link to our favorite third-party resources so our users can optimize for success.</h3>

                    </div>






                    <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-28  mx-0 md:mx-10">

                    <div className="collapse collapse-arrow bg-black text-white">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>       
                    </div>
<br />

                    <div className="collapse collapse-arrow bg-black text-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
<br />

                    <div className="collapse collapse-arrow bg-black text-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
<br />
                    
                    <div className="collapse collapse-arrow bg-black text-white">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>



                    </div>






                </div>
            </div>


        </>
    )
}

export default OurProuduct