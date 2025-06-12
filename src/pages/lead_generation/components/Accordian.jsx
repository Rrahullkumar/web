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
            What is digital transformation?
          </label>
          <div className="accordion-content">
            <p>
              Digital transformation is the process of using digital technologies to enhance business operations, improve customer experiences, and drive innovation. It’s about more than just adopting new tools—it’s about changing how your business thinks, works, and grows.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            Why does my business need digital transformation?
          </label>
          <div className="accordion-content">
            <p>
              It helps you stay competitive by automating processes, reducing costs, increasing efficiency, and offering better customer service. It also enables data-driven decision-making and faster innovation.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            What services are included in digital transformation?
          </label>
          <div className="accordion-content">
            <p>
              Services typically include business process automation, cloud migration, data analytics, AI integration, CRM/ERP implementation, software development, and cybersecurity upgrades.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            How long does digital transformation take?
          </label>
          <div className="accordion-content">
            <p>
              There’s no one-size-fits-all answer. It depends on your business size, goals, and existing systems. Some companies start seeing results in weeks, while full transformations may take months.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-1" />
          <label className="accordion-label" htmlFor="right-1">
            Is digital transformation expensive?
          </label>
          <div className="accordion-content">
            <p>
              While there’s an initial investment, digital transformation often leads to significant cost savings over time through improved efficiency, automation, and reduced manual errors.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-2" />
          <label className="accordion-label" htmlFor="right-2">
            Will digital transformation disrupt my current operations?
          </label>
          <div className="accordion-content">
            <p>
              Not if it’s planned well. At WebNest Media, we ensure a smooth transition with minimal disruption, integrating new systems gradually while supporting your team through the process.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-3" />
          <label className="accordion-label" htmlFor="right-3">
            Is digital transformation suitable for small businesses?
          </label>
          <div className="accordion-content">
            <p>
              Yes! In fact, small businesses can benefit the most. Affordable, scalable digital tools help streamline operations and improve customer engagement without large upfront costs.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-4" />
          <label className="accordion-label" htmlFor="right-4">
            What are the long-term benefits of digital transformation?
          </label>
          <div className="accordion-content">
            <p>
              Improved scalability, increased agility, stronger customer relationships, better data insights, and the ability to adapt quickly to market changes are just a few of the long-term advantages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
