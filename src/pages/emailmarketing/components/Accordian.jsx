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
            What is the meaning of email marketing?
          </label>
          <div className="accordion-content">
            <p>
              Email marketing meaning refers to the practice of sending targeted emails to a group of people to promote products, share updates, or build relationships. It's one of the most cost-effective digital marketing strategies used across industries, especially for lead nurturing and customer engagement.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            What are the different types of email marketing?
          </label>
          <div className="accordion-content">
            <p>
              There are several types of email marketing, including: Promotional emails for discounts or special offers, Transactional emails like order confirmations or shipping updates, Lifecycle emails such as welcome or re-engagement campaigns, and Newsletter emails for regular content sharing. Each type serves a unique purpose in guiding the customer through their buying journey.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How to do email marketing effectively?
          </label>
          <div className="accordion-content">
            <p>
              Wondering how to do email marketing? Start by building a quality email list through opt-in forms, choose the right email marketing platform, create engaging content, segment your audience, and track your results.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            Why is ecommerce email marketing important for online stores?
          </label>
          <div className="accordion-content">
            <p>
              Ecommerce email marketing helps online stores drive repeat sales, reduce cart abandonment, and increase customer retention. Emails like product recommendations, abandoned cart reminders, and post-purchase follow-ups can create a personalized shopping experience that boosts loyalty.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-1" />
          <label className="accordion-label" htmlFor="right-1">
            What is a good conversion rate in email marketing?
          </label>
          <div className="accordion-content">
            <p>
              A decent conversion rate in email marketing varies by industry but typically falls between 1% to 5%. A higher conversion rate indicates that your emails are resonating well with your audience and driving them to take the desired action.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-2" />
          <label className="accordion-label" htmlFor="right-2">
            How to calculate conversion rate in email marketing?
          </label>
          <div className="accordion-content">
            <p>
              To calculate the conversion rate in email marketing, use the formula: (Number of conversions ÷ Total emails delivered) × 100. For example, if you sent 1,000 emails and got 50 purchases, your conversion rate is 5%. Tracking this metric helps you measure the success of your campaigns.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-3" />
          <label className="accordion-label" htmlFor="right-3">
            What are the benefits of opt-in email marketing?
          </label>
          <div className="accordion-content">
            <p>
              The benefits of opt-in email marketing include higher engagement, better deliverability, and improved trust. When users willingly subscribe to your emails, they’re more likely to open, read, and act—leading to higher ROI and fewer spam complaints.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-4" />
          <label className="accordion-label" htmlFor="right-4">
            How much does it cost for email marketing?
          </label>
          <div className="accordion-content">
            <p>
              Curious about how much does it cost for email marketing? It can range from free to several hundred dollars per month, depending on the platform, list size, and features you use. Popular tools like Mailchimp or ConvertKit offer tiered pricing models based on your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
