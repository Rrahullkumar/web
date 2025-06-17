import React from "react";
import "./accordian.css";

const Accordion = () => {
  return (
    <div className="accordion-wrapper-columns">
      {/* Left Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="left-1" />
          <label className="accordion-label" htmlFor="left-1">
            What exactly is Influencer Marketing?
          </label>
          <div className="accordion-content">
            <p>
              Influencer marketing is a strategic approach where brands collaborate with individuals who have established credibility and an engaged audience (influencers) to promote products or services. It leverages their trusted voice to reach and persuade target consumers more authentically than traditional advertising.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            Why should my brand invest in Influencer Marketing?
          </label>
          <div className="accordion-content">
            <p>
              Investing in influencer marketing offers numerous benefits, including increased brand awareness, enhanced trust and credibility, targeted reach to niche audiences, higher engagement rates, and ultimately, improved sales and ROI. It's a powerful way to cut through digital noise.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How do you identify the right influencers for my brand?
          </label>
          <div className="accordion-content">
            <p>
              Our influencer marketing expert team uses a data-driven approach to identify ideal influencers. We analyze audience demographics, engagement rates, content quality, brand alignment, and past campaign performance to ensure a perfect match that resonates with your target market.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            What types of influencers do you work with?
          </label>
          <div className="accordion-content">
            <p>
              We work with a diverse range of influencers across all tiers, including nano-influencers, micro-influencers, macro-influencers, and even celebrity influencers. The choice depends on your campaign goals, budget, and desired reach, ensuring optimal impact.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-1" />
          <label className="accordion-label" htmlFor="right-1">
            Which social media platforms are best for influencer campaigns?
          </label>
          <div className="accordion-content">
            <p>
              The best platform depends on your target audience and content goals. We specialize in campaigns across Instagram, YouTube, TikTok, Facebook, LinkedIn, and more. Our strategy determines where your influencer marketing campaign will be most effective.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-2" />
          <label className="accordion-label" htmlFor="right-2">
            How do you measure the success and ROI of an influencer marketing campaign?
          </label>
          <div className="accordion-content">
            <p>
              We employ comprehensive performance tracking and ROI measurement techniques. This includes monitoring metrics like reach, impressions, engagement rate, website traffic, conversion rates, and sales generated through unique tracking links and promo codes. We provide transparent, detailed reports to showcase your return on investment.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-3" />
          <label className="accordion-label" htmlFor="right-3">
            Is influencer marketing suitable for small businesses and startups?
          </label>
          <div className="accordion-content">
            <p>
              Absolutely! Influencer marketing is highly scalable. Nano and micro-influencers, in particular, offer cost-effective solutions for small businesses to reach highly engaged, niche communities and build strong brand loyalty, making it an accessible and impactful strategy.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-4" />
          <label className="accordion-label" htmlFor="right-4">
            What are the legal and disclosure requirements for influencer campaigns?
          </label>
          <div className="accordion-content">
            <p>
              We ensure full compliance with all relevant advertising regulations, such as FTC guidelines and local advertising standards. This includes clear disclosure of sponsored content using hashtags like #ad or #sponsored to maintain transparency and consumer trust in all influencer marketing activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
