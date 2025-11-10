import React from 'react'

const FaqGurgaon = () => {
  const faqData = [
    {
      question: "What are your SEO services?",
      answer: " We offer complete SEO solutions, including on-page SEO, off-page SEO, keyword research, content optimization, technical SEO, and link building."
    },
    {
      question: "Can I cancel my SEO retainer at any time?",
      answer: "Yes, you can cancel anytime. However, SEO is a long-term process, and consistent efforts bring the best results."
    },
    {
      question: "What is the purpose of Search Engine Optimization (SEO)?",
      answer: "The main goal of SEO is to improve your website’s visibility on Google and attract more relevant traffic organically."
    },
    {
      question: "Why is SEO important for business?",
      answer: "SEO helps your business rank higher, reach your target audience, and generate leads without relying heavily on paid ads."
    },
    {
      question: "How long does it take to see SEO results?",
      answer: "Typically, SEO results start showing within 3 to 6 months, depending on competition and website quality."
    },
    {
      question: "Do you provide local SEO services across India?",
      answer: "Yes, we offer local SEO services for businesses across India. Whether you’re in Delhi, Mumbai, Bangalore, or any other city, our team helps you rank higher in local searches and connect with customers in your area."
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer: "On-page SEO focuses on optimizing your website content and structure, while off-page SEO builds authority through backlinks."
    },
    {
      question: "How do backlinks help in SEO?",
      answer: " High-quality backlinks improve your website’s credibility and help it rank higher in search engine results."
    },
    {
      question: "Will you provide monthly SEO reports?",
      answer: "Yes, we share detailed monthly reports showing progress, keyword rankings, and performance insights."
    },
    {
      question: "Why choose WebNest Media for SEO?",
      answer: "Because we combine data-driven strategy, creative content, and expert execution to deliver measurable results."
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

export default FaqGurgaon
