import React from 'react'

const FaqMumbai = () => {

    const faqData = [
    {
      question: "How does SEO actually work to improve website rankings?",
      answer: "SEO works by optimizing your website’s content, structure, and backlinks to align with search engine algorithms, helping your pages rank higher in search results."
    },
    {
      question: "What are the key factors that influence SEO rankings in Google?",
      answer: "Google rankings are influenced by factors like content quality, keyword relevance, website loading speed, backlinks, and mobile friendliness. Focusing on user experience and following Google’s algorithms can significantly boost your site’s visibility."
    },
    {
      question: "How can SEO help increase leads and conversions for a business?",
      answer: "SEO attracts highly targeted traffic from users actively searching for your products or services. When your website ranks higher for the right keywords, you gain more qualified visitors — leading to better leads, conversions, and overall business growth."
    },
    {
      question: "Is SEO better than paid advertising (PPC)?",
      answer: "Yes, SEO provides long-term, sustainable traffic at a lower cost, while PPC gives short-term results that stop once you stop paying for ads."
    },
    {
      question: "Why is keyword research so important in SEO?",
      answer: "Keyword research helps identify what users are searching for, allowing you to create content that matches their intent and improves your ranking potential."
    },
    {
      question: "What are the most common SEO mistakes to avoid?",
      answer: "Avoid keyword stuffing, duplicate content, poor mobile optimization, slow site speed, and ignoring user experience — these hurt your SEO performance."
    },
    {
      question: "How do backlinks affect search engine rankings?",
      answer: "High-quality backlinks from authoritative websites signal trust and relevance to Google, helping your site climb higher in organic rankings."
    },
    {
      question: "Can I do SEO myself or do I need an expert?",
      answer: " You can start basic SEO yourself, but hiring an expert ensures advanced strategies, consistent monitoring, and better results without risking penalties."
    },
    {
      question: "How often should I update my website content for SEO?",
      answer: "You should review and update your content every 3–6 months to keep it fresh, relevant, and aligned with changing search engine trends."
    },
    {
      question: "What are Google’s most important ranking factors in 2025?",
      answer: "Key ranking factors include high-quality content, backlinks, user experience (UX), page speed, mobile optimization, and E-E-A-T (Expertise, Experience, Authority, Trust)."
    }
  ];

    // Split array into two columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, midPoint);
  const rightColumnFaqs = faqData.slice(midPoint);

  return (
    <div className="accordian max-w-[1440px] w-[100%] mx-auto mt-[96px]">
      <div>
        <h2 className="text-center" style={{ fontSize: 32 }}>
          Let's address your <span className="text-black">questions</span> today
        </h2>

        <div className="accordion-wrapper-columns">
          {/* Left Column */}
          <div className="accordion-column">
            {leftColumnFaqs.map((faq, index) => (
              <div className="accordion" key={index}>
                <input type="checkbox" id={`left-${index + 1}`} />
                <label className="accordion-label" htmlFor={`left-${index + 1}`}>
                  {faq.question}
                </label>
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="accordion-column">
            {rightColumnFaqs.map((faq, index) => (
              <div className="accordion" key={index}>
                <input type="checkbox" id={`right-${index + midPoint + 1}`} />
                <label className="accordion-label" htmlFor={`right-${index + midPoint + 1}`}>
                  {faq.question}
                </label>
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqMumbai