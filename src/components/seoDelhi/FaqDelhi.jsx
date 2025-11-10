import React from 'react'

const FaqDelhi = () => {

      const faqData = [
    {
      question: "How does SEO work? ",
      answer: "SEO improves your website’s content, structure, and backlinks to get search engines to understand and value your site better."
    },
    {
      question: "How much should SEO cost? ",
      answer: "The cost of SEO depends on your business goals, competition level, and target location."
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer: "On-page SEO improves the internal components of your site, while off-page SEO concentrates on building backlinks and establishing external authority. "
    },
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO results typically appear in a 3–6 month time frame, depending on your competition and the state of your website. "
    },
    {
      question: "Why is SEO important for my business? ",
      answer: "SEO enhances your online presence and the quality of the traffic you receive, resulting in a higher likelihood of sales or leads."
    },
    {
      question: " Do I need to do SEO every month? ",
      answer: "Indeed, to retain and improve rankings, ongoing consistent optimization is required."
    },
    {
      question: "Can SEO help local businesses in Delhi? ",
      answer: "Certainly. Local SEO allows businesses in Delhi to appear in local searches and on Google Maps."
    },
    {
      question: "What tools do SEO agencies use? ",
      answer: "Commonly used tools for analysis and tracking include Google Analytics, Ahrefs, SEMrush, and Screaming Frog."
    },
    {
      question: "In what ways is WebNest Media different from other SEO agencies in Delhi?",
      answer: "We emphasize customized SEO services for each client, transparent reporting, and the adoption of a strategy based on data."
    },
    {
      question: "Do you give customized SEO plans?",
      answer: "Yes, we develop SEO plans based on your business objectives, your target audience, and the competitors in your industry."
    }
  ];

  // Split array into two columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, midPoint);
  const rightColumnFaqs = faqData.slice(midPoint);

    return (
        <div>

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

        </div>
    )
}

export default FaqDelhi