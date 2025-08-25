import React from "react";
import "./accordian.css";

const Accordion = () => {
  return (
    <div className="amc6 container mx-auto px-10 max-lg:px-4 mt-24 max-lg:mt-10">
      <div className="accordian">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Let's address your <span className="text-black">questions</span> today
        </h2>

        <div className="accordion-wrapper-columns">
          {/* Left Column */}
          <div className="accordion-column">
            {[
              {
                id: "left-1",
                question: "What is mobile marketing?",
                answer:
                  "Mobile marketing is a form of digital marketing that aims at reaching your clientele straight through their smartphones, tablets, and other mobile gadgets. It includes responsive mobile sites, SMS campaigns, in-app advertising, geo-targeted ads, and social media promotions.",
              },
              {
                id: "left-2",
                question:
                  "Why is mobile marketing so important for businesses in Gurgaon?",
                answer:
                  "Gurgaon’s mobile-savvy population uses their phones for everything from searching to purchasing. Mobile marketing helps businesses reach them instantly through personal recommendations, geo-targeted services, and fast responses in a competitive market.",
              },
              {
                id: "left-3",
                question:
                  "How is mobile marketing different from traditional digital marketing?",
                answer:
                  "Mobile marketing focuses on smaller-screen devices and user behavior such as touch navigation, mobile app use, and quick access to information. Traditional digital marketing often emphasizes desktop interactions.",
              },
              {
                id: "left-4",
                question:
                  "Which companies get the most advantages of mobile marketing?",
                answer:
                  "Local businesses like restaurants, retail stores, service providers, e-Commerce shops, and app developers benefit the most—especially when looking to boost customer engagement, loyalty, and direct sales.",
              },
              {
                id: "left-5",
                question:
                  "What services does WebNest Media offer in mobile marketing?",
                answer: `We provide:
– Responsive Web Design
– Paid Mobile Advertising (social media, Google Ads, in-app)
– SMS & MMS Campaigns
– Mobile Advertising (Geofencing, proximity marketing)
– Mobile App Marketing (ASO, push notifications, in-app messages)
– QR Code Campaigns`,
              },
            ].map((item) => (
              <div className="accordion" key={item.id}>
                <input type="checkbox" id={item.id} />
                <label className="accordion-label" htmlFor={item.id}>
                  {item.question}
                </label>
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="accordion-column">
            {[
              {
                id: "right-6",
                question: "How do you evaluate mobile marketing strategies?",
                answer:
                  "We assess traffic to the mobile site, engagement, conversion rates, app downloads, SMS interaction, ad click-through rate (CTR), and return on investment (ROI).",
              },
              {
                id: "right-7",
                question:
                  "Can I add mobile marketing to my present digital marketing plan?",
                answer:
                  "Absolutely! Mobile marketing complements your current digital strategy. We ensure brand consistency across desktop and mobile platforms.",
              },
              {
                id: "right-8",
                question: "How soon will I notice results from mobile marketing?",
                answer:
                  "Results vary by business and strategy. Paid mobile ads can show results quickly, while SEO or app store efforts may take time. We ensure clear timelines and progress tracking.",
              },
            ].map((item) => (
              <div className="accordion" key={item.id}>
                <input type="checkbox" id={item.id} />
                <label className="accordion-label" htmlFor={item.id}>
                  {item.question}
                </label>
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
