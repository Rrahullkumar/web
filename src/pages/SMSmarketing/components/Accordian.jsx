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
            What exactly is SMS Marketing?
          </label>
          <div className="accordion-content">
            <p>
              SMS Marketing is a way for businesses to send promotional messages, updates, and alerts directly to customers' mobile phones via text messages. It's a direct and instant way to communicate.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            Why should my business use SMS Marketing?
          </label>
          <div className="accordion-content">
            <p>
              SMS Marketing has very high open rates (nearly 98%), meaning your messages are almost always seen quickly. It's great for urgent offers, quick updates, and building a direct connection with your customers, leading to better engagement and sales.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How do customers sign up to receive texts from my business?
          </label>
          <div className="accordion-content">
            <p>
              Customers typically "opt-in" or give permission to receive messages. This can be done by texting a keyword to a number, filling out a form on your website, or checking a box during an online purchase.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            What kinds of messages can I send through SMS Marketing?
          </label>
          <div className="accordion-content">
            <p>
              You can send various types of messages, including flash sales, discount codes, new product announcements, order confirmations, shipping updates, appointment reminders, and even requests for customer feedback.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-1" />
          <label className="accordion-label" htmlFor="right-1">
            How often should I send SMS messages to my customers?
          </label>
          <div className="accordion-content">
            <p>
              The ideal frequency varies by business and audience. We help you determine a schedule that keeps customers engaged without overwhelming them, balancing your goals with a positive customer experience.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-2" />
          <label className="accordion-label" htmlFor="right-2">
            Is SMS Marketing legal and compliant with regulations in India?
          </label>
          <div className="accordion-content">
            <p>
              Yes, absolutely. We ensure all our SMS marketing campaigns strictly follow local regulations, like TRAI guidelines in India, including proper opt-in/opt-out procedures and DND (Do Not Disturb) list management, to keep your business compliant.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-3" />
          <label className="accordion-label" htmlFor="right-3">
            How do you measure the success of an SMS Marketing campaign?
          </label>
          <div className="accordion-content">
            <p>
              We track key metrics like message delivery rates, click-through rates (how many people clicked links in your texts), conversion rates (how many made a purchase), and overall ROI. We provide clear reports so you can see your results.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-4" />
          <label className="accordion-label" htmlFor="right-4">
            What is the difference between SMS Marketing and WhatsApp Marketing?
          </label>
          <div className="accordion-content">
            <p>
              SMS Marketing uses standard text messages, while WhatsApp Marketing utilizes the WhatsApp Business API for richer communication, including images, videos, and interactive buttons, often allowing for more conversational flows. We offer solutions for both, depending on your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
