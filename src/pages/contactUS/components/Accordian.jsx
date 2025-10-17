// Here's your updated accordion using your original checkbox format and updated with your contact-related content.

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
            What services does WebNest Media offer?
          </label>
          <div className="accordion-content">
            <p>
              WebNest Media offers SEO, SEM, Social Media Marketing, Web Development, Content Marketing, and Affiliate Marketing services.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            How can I contact WebNest Media?
          </label>
          <div className="accordion-content">
            <p>
              You can contact us via email at <a href="mailto:info@webnestmedia.in"
                aria-label="WebNest Media  info webmail"
              
              >info@webnestmedia.in</a> or call us at +91-9696964606.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            What is the turnaround time for projects?
          </label>
          <div className="accordion-content">
            <p>
              Turnaround time depends on the project size, but we always aim for timely deliveries with clear communication.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            Can I request a custom service package?
          </label>
          <div className="accordion-content">
            <p>
              Yes, we offer tailored service packages based on your unique business needs. Feel free to contact us to discuss.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-1" />
          <label className="accordion-label" htmlFor="right-1">
            What is the best way to get a quick response?
          </label>
          <div className="accordion-content">
            <p>
              Emailing us at <a href="mailto:info@webnestmedia.in"
                       aria-label="WebNest Media  info Email"

              
              >info@webnestmedia.in</a> or calling +91-9696964606 is the fastest way to reach us.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-2" />
          <label className="accordion-label" htmlFor="right-2">
            Is there a consultation fee?
          </label>
          <div className="accordion-content">
            <p>
              No, we offer free initial consultations to understand your business goals and recommend the best strategies.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-3" />
          <label className="accordion-label" htmlFor="right-3">
            Do you work with businesses of all sizes?
          </label>
          <div className="accordion-content">
            <p>
              Yes! We work with startups, small businesses, and large enterprises across various industries.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-4" />
          <label className="accordion-label" htmlFor="right-4">
            How soon can I get started?
          </label>
          <div className="accordion-content">
            <p>
              You can get started right away by submitting the contact form or reaching out to us directly via email or phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
