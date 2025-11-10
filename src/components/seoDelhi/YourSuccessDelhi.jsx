import React from 'react'

const YourSuccessDelhi = () => {

    const statsData = [
        { number: "2,13,456", label: "Organic Traffic Growth" },
        { number: "13,200+", label: "Keyword Rankings" },
        { number: "98/100", label: "Speed & UX Score" },
        { number: "99,999+", label: "Leads Generated" },
    ];

    return (
        <div>
            <section className="bg-[#EFF4EE] pb-[72px]  flex flex-col mt-24 max-lg:mt-10 items-center justify-center max-md: ">
                <div
                    data-aos="fade-up"
                    className="max-w-[1440px] w-[100%] mx-auto text-center pl-[40px] pr-[40px]  max-md:pl-[16px] max-md:pr-[16px]"
                >
                    <h2
                        style={{
                            color: "black",
                            fontSize: 32,
                            fontWeight: 600,
                            paddingBottom: 72,
                            paddingTop: 72,
                        }}
                    >
                        Your <span className="highlight">Success</span> is our{" "}
                        <span className="highlight">Mission</span>
                    </h2>

                    <div
                        data-aos="fade-up"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
                    >
                        {statsData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#ddd] rounded-xl p-10 text-center 
                 shadow-[0_2px_8px_rgba(0,0,0,0.05)] 
                 transition-transform duration-200 ease-in-out 
                 hover:-translate-y-1 
                 max-w-full h-[200px] w-full"
                            >
                                <p className="text-[#4CAF50] text-[42px] font-light">
                                    {item.number}
                                </p>
                                <p className="text-2xl font-normal text-[#333] leading-[160%] mt-2.5 text-center ">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default YourSuccessDelhi