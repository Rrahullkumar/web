import React from 'react'
import topimage from './resources/topimage.svg'
import c2image from './resources/c2image.svg'
import icon1 from './resources//icon1.svg'
import icon2 from './resources//icon2.svg'
import icon3 from './resources//icon3.svg'
import icon4 from './resources//icon4.svg'
import { FiPhone } from "react-icons/fi";
import Accordion from './components/Accordian'
const Emailmarketing = () => {
  return (
    <div className='mt-[50px] '>
      <div className="emailc1 relative">
                  {/* Background image */}
                  <img src={topimage} alt="" className="w-full h-auto" />
      
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-60"></div>
      
                  {/* Heading */}
                  <h1 className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] text-center z-10">
                      <span className="text-[#4CAF50]">Email</span> Marketing
                  </h1>
        </div>
        <div className="emailc2 flex flex-col mt-[96px] pl-10 pr-10">
            <div className="emailc21 flex flex-col justify-center items-center">
                <h2 className='text-[52px] text-center mb-9 '>Email Marketing Services</h2>
                <p className='text-lg text-center w-[60%]'>Empowering your brand with data-driven email marketing solutions for maximum ROI and customer engagement</p>
            </div>
            <div className="emailc22 flex flex-row mt-28 justify-between mb-12 ">

                <div className="emleft w-[60%]">
                    <h2 className='text-[52px] mb-9'>What is Email Marketing?</h2>
                    <p className='text-lg text-left'>When it comes to direct, impactful digital communication that genuinely drives results, there's arguably no more potent channel than Email Marketing. <br />
                    <br />It's not just about sending out messages; it's a strategic powerhouse for building relationships, converting leads, and fostering customer loyalty. Consider this: for every $1 spent on email marketing, businesses typically see an average Return on Investment (ROI) of $36. That's a staggering figure, highlighting its unmatched efficiency.
                    <br />The widespread global adoption of email, combined with its capacity for deep personalization and precise automation, makes email marketing more critical than ever before for any business serious about sustained growth and authentic customer engagement.</p>
                </div>

                <div className="w-[calc(100% - 38%)]">
                    <div className="emright object-contain w-[439px] h-[422px]">
                        <img src={c2image} alt="" className='w-[100%] h-[100%]' />
                    </div>
                </div>
              

            </div>
            <div className="emailc23 text-lg ">
                <span className='italic font-semibold text-xl'> What is Email Marketing?</span> When it comes to direct, impactful digital communication that genuinely drives results, there's arguably no more potent channel than Email Marketing.
                <br />
                <br />
                It's not just about sending out messages; it's a strategic powerhouse for building relationships, converting leads, and fostering customer loyalty. Consider this: for every $1 spent on email marketing, businesses typically see an average Return on Investment (ROI) of $36. That's a staggering figure, highlighting its unmatched efficiency.
                <br />
                <br />
                The widespread global adoption of email, combined with its capacity for deep personalization and precise automation, makes email marketing more critical than ever before for any business serious about sustained growth and authentic customer engagement.
            </div>
            <div className="emailc24 flex flex-col items-center justify-center mt-24">
                <h2 className='text-[52px] text-center mb-12 font-semibold w-[80%]'>Let Webnest Media Manage Your Email Marketing Optimization</h2>
                <p className='text-lg'>In today's overflowing digital world, the inbox isn't just a folder; it's a direct line to your audience's attention, a privileged space that demands respect and strategic finesse. Don't let your brand's voice get lost in the noise, or worse, end up in the spam folder.

                <br /> <br /> As an email marketing agency in India, we don't just optimize emails; we orchestrate genuine connections. We understand that behind every email address is a real person, a potential loyal customer whose time and trust are invaluable. Our unique approach dives deep into understanding their journey, crafting messages that resonate, inspire, and drive action – not just clicks.

                <br /> <br />We transform your email campaigns into powerful conversations, ensuring every subject line sparks curiosity, every piece of content delivers value, and every call-to-action feels like a natural next step. Let us fine-tune your strategy, leverage advanced insights, and elevate your email marketing from a mere task to your most potent relationship-building and revenue-generating engine. Because when your emails connect on a human level, your business truly thrives.</p>
            </div>
        </div>
       <div className="emailc3 flex flex-col items-center justify-center mt-32 px-10">
            <h2 className="text-[52px] text-center mb-12 font-semibold w-[60%]">
                WebNest’s Email Marketing Campaign Services
            </h2>

            <p className="text-base text-center w-[60%]">
                Our email marketing services are engineered to transform your inbox presence from a hopeful broadcast into a powerful, personalized revenue engine. We know that behind every email address is a human waiting to be inspired, informed, or delighted.
            </p>

            <div className="emc3cards flex flex-wrap justify-center gap-6 mt-12 w-full max-w-[1400px] items-stretch">

  <div className="emcard flex flex-col items-center text-center w-[300px] p-6">
    <div className="flex-1 flex items-center justify-center">
      <h3 className="text-3xl font-semibold w-[90%]">
        Strategy & Planning
      </h3>
    </div>
    <p className="text-sm leading-relaxed mt-4">
      This foundational service involves understanding your business goals, target audience, and competitive landscape to develop a tailored email marketing strategy. It defines campaign objectives, identifies key performance indicators (KPIs), and maps out the customer journeys that will yield the best results.
    </p>
  </div>

  <div className="emcard flex flex-col items-center text-center w-[300px] p-6">
    <div className="flex-1 flex items-center justify-center">
      <h3 className="text-3xl font-semibold w-[90%]">
        Content Creation & Design
      </h3>
    </div>
    <p className="text-sm leading-relaxed mt-4">
      This foundational service involves understanding your business goals, target audience, and competitive landscape to develop a tailored email marketing strategy. It defines campaign objectives, identifies key performance indicators (KPIs), and maps out the customer journeys that will yield the best results.
    </p>
  </div>

  <div className="emcard flex flex-col items-center text-center w-[300px] p-6">
    <div className="flex-1 flex items-center justify-center">
      <h3 className="text-3xl font-semibold w-[90%]">
        Email Automation
      </h3>
    </div>
    <p className="text-sm leading-relaxed mt-4">
      This foundational service involves understanding your business goals, target audience, and competitive landscape to develop a tailored email marketing strategy. It defines campaign objectives, identifies key performance indicators (KPIs), and maps out the customer journeys that will yield the best results.
    </p>
  </div>

  <div className="emcard flex flex-col items-center text-center w-[300px] p-6">
    <div className="flex-1 flex items-center justify-center">
      <h3 className="text-3xl font-semibold w-[90%]">
        Performance Tracking & Reporting
      </h3>
    </div>
    <p className="text-sm leading-relaxed mt-4">
      This foundational service involves understanding your business goals, target audience, and competitive landscape to develop a tailored email marketing strategy. It defines campaign objectives, identifies key performance indicators (KPIs), and maps out the customer journeys that will yield the best results.
    </p>
  </div>

</div>


            </div>
            <div className="emailc4 flex flex-col items-center justify-center mt-32 px-10">
                 <h2 className="text-[52px] text-center mb-12 font-semibold w-[60%]">
                    Why Opt for an Email Marketing Agency for Business?
                </h2>

                <p className="text-base text-center w-[70%] mb-16">
                The best email marketing company can help you drive your business drive smoothly and grow your business apace. But are you truly maximizing its potential, or is email marketing just another task on an already overflowing to-do list? Working with a professional agency is not merely a choice for companies who are committed to utilizing email to its maximum potential; rather, it is a strategic need.
                <br />
                <br />
            <span className='text-lg font-semibold'> Here's why entrusting your email marketing to an expert agency makes all the difference:</span>
                </p>
                <div className="emc4cards flex flex-wrap justify-between gap-6 w-full max-w-[1400px] items-stretch">

                <div className="emcard4 flex flex-col items-center text-center w-[300px] p-6 justify-between">
                    <div className="mb-4">
                    <img src={icon1} alt="" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-4 flex-1">
                    <h3 className="text-2xl font-semibold text-center">
                        Unlock Deep, Specialized Expertise
                    </h3>
                    <p className="text-sm leading-relaxed text-center">
                        We bring a dedicated team of email digital marketing specialists who live and breathe strategy, compliance (including TRAI’s DLT in India), and deliverability, aiming to be the best email marketing service for you.
                    </p>
                    </div>
                </div>

                <div className="emcard4 flex flex-col items-center text-center w-[300px] p-6 justify-between">
                    <div className="mb-4">
                    <img src={icon2} alt="" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-4 flex-1">
                    <h3 className="text-2xl font-semibold text-center">
                        Reclaim Your Valuable Time & Resources
                    </h3>
                    <p className="text-sm leading-relaxed text-center">
                        By outsourcing to leading email marketing companies, you free your team to focus on core business, eliminating the need to hire or train in-house experts.
                    </p>
                    </div>
                </div>

                <div className="emcard4 flex flex-col items-center text-center w-[300px] p-6 justify-between">
                    <div className="mb-4">
                    <img src={icon3} alt="" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-4 flex-1">
                    <h3 className="text-2xl font-semibold text-center">
                        Access Cutting-Edge Tools & Technology
                    </h3>
                    <p className="text-sm leading-relaxed text-center">
                        Gain instant access to premium platforms and advanced analytics tools, ensuring sophisticated campaign capabilities without significant upfront investment.
                    </p>
                    </div>
                </div>

                <div className="emcard4 flex flex-col items-center text-center w-[300px] p-6 justify-between">
                    <div className="mb-4">
                    <img src={icon4} alt="" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-4 flex-1">
                    <h3 className="text-2xl font-semibold text-center">
                        Drive Data-Backed Performance & ROI
                    </h3>
                    <p className="text-sm leading-relaxed text-center">
                        Our data-driven approach continuously optimizes campaigns, from targeted personalization to bulk email marketing, delivering higher engagement, better click-throughs, and a stronger, more predictable Return on Investment.
                    </p>
                    </div>
                </div>

                </div>

               

            </div>
            <div className="lgc7 mt-[96px]">
            <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom text-center">Lets address your <span className='text-[#409338]'>questions</span> today!</p>
            <Accordion></Accordion>
        </div>

    </div>
  )
}

export default Emailmarketing
