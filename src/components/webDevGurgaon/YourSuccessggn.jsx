import React from 'react'

const YourSuccessggn = () => {
    return (
        <div>
            <div className='bg-[#EFF4EE]'>
                <section className='max-w-[1440px] mx-auto flex flex-col text-center py-16  mt-24 max-md:mt-10'>
                    <h2 className='text-[32px] max-md:text-2xl mb-16'> Your <span className='text-[#4caf50] '>success</span> is Our <span className='text-[#4caf50]'>Mission</span></h2>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 px-10 max-md:px-4'>
                        <div className="cardss border px-20 pt-9 pb-7 rounded-xl flex flex-col gap-3 items-center bg-white">
                            <h3 className='text-5xl font-light max-md:text-4xl text-[#4caf50]'>213,456</h3>
                            <p className='text-2xl text-nowrap'>Project Delivered</p>
                        </div>
                        <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                            <h3 className='text-5xl font-light  max-md:text-4xl text-[#4caf50]'>13,200+</h3>
                            <p className='text-2xl text-nowrap'>Clients Served</p>
                        </div>
                        <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center bg-white">
                            <h3 className='text-5xl font-light max-md:text-4xl text-[#4caf50]'>99/100</h3>
                            <p className='text-2xl text-nowrap'>Speed & UX Score</p>
                        </div>
                        <div className="cardss border px-20 pt-9 pb-7 rounded-xl gap-3 flex flex-col items-center  bg-white">
                            <h3 className='text-5xl font-light max-md:text-4xl text-[#4caf50]'>231,580+</h3>
                            <p className='text-2xl text-nowrap'>Custom Development</p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default YourSuccessggn