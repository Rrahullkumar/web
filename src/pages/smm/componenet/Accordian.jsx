import "./accordian.css";

const Accordion = () => {
  const accordionData = [
    // Left Column Items
    {
      id: "left-1",
      question: "What is social media marketing, anyway?",
      answer: "Using sites like Facebook, Instagram, LinkedIn, and Twitter to promote your business, raise brand awareness, and make sales is what social media marketing is all about. It includes making content, talking to people, running advertisements, and looking at the results. At its heart, it's about making relationships that matter and help your business develop."
    },
    {
      id: "left-2", 
      question: "How to promote a digital marketing agency on social media?",
      answer: "For a marketing agency, advertising through social media is part creative, part strategic. To gain your audience's trust, consider sharing case studies, success stories, industry wisdom, and even some behind-the-scenes content. Its also important to note that ad campaigns and reuined engagement to peering processes on the subliminal level can also increase trust. Collaborating with influencers and using industry-related hashtags increases visibility too."
    },
    {
      id: "left-3",
      question: "What do companies that perform social media marketing do?", 
      answer: "You can be sure that your brand will benefit from new ideas, creative campaigns, and regular involvement when you hire a competent social media marketing company. Some of the key benefits are that it helps people remember your brand, establishes closer relationships with customers, enables you promote for less money, and offers you access to powerful tools and analytics that help you get the most out of your money."
    },
    {
      id: "left-4",
      question: "What are the advantages of working with a social media marketing company?",
      answer: "You can be sure that your brand will benefit from new ideas, creative campaigns, and regular involvement when you hire a competent social media marketing company. Some of the key benefits are that it helps people remember your brand, establishes closer relationships with customers, enables you promote for less money, and offers you access to powerful tools and analytics that help you get the most out of your money."
    },
    {
      id: "left-5",
      question: "What does a social media marketing agency for eCommerce do?",
      answer: "The main job of an eCommerce social media marketing business is to help online stores acquire more exposure and sales on sites like Facebook, Instagram, and Pinterest. They generate content that people can buy, run ads, and get people to visit your online store, turning followers on social media into paying customers."
    },
    {
      id: "left-6",
      question: "How much do companies that conduct social media marketing charge?",
      answer: "The price of engaging a social media marketing agency in Delhi NCR or anywhere else depends on how many platforms they work on, how difficult the campaigns are, and what services they provide. Basic management could cost as little as a few thousand rupees a month, while full-scale advertising and advanced programming could cost several lakhs."
    },
    // Right Column Items
    {
      id: "right-7",
      question: "Is there a way to attract more people to follow me on social media without spending money?",
      answer: "To acquire organic growth, you need to regularly post fascinating, high-quality content that your target audience can relate to. You can grow without paying for ads by using relevant hashtags, hosting interactive surveys, collaborating with influencers, and getting to know your audience."
    },
    {
      id: "right-8",
      question: "What tools can help with marketing on social media?",
      answer: "There are a lot of tools that help you manage social media. Hootsuite, Buffer, and Sprout Social are all apps that can help you plan your postings. Tools like Canva and Adobe Express help you make material more easily. You can utilize analytics tools like Google Analytics and insights from your own platform to see how well you're doing and make your goals better."
    },
    {
      id: "right-9", 
      question: "How do I choose the finest social networking site for my business?",
      answer: "The best platform for you will depend on who you want to reach and what kind of business you have. B2B businesses do well on LinkedIn, and B2C businesses do well on Facebook and Instagram. For online stores, Instagram and Pinterest might be the greatest social media sites. An experienced agency can help you choose the right platforms for your needs."
    },
    // {
    //   id: "right-10",
    //   question: "What tools can help make social media marketing easier?",
    //   answer: (
    //     <ul className="list-disc pl-5 space-y-2 text-gray-700">
    //       <li>Canva for design</li>
    //       <li>Buffer or Later for scheduling</li>
    //       <li>Trello or Notion for content planning</li>
    //       <li>Google Analytics or native insights for tracking performance</li>
    //     </ul>
    //   )
    // },
    {
      id: "right-10",
      question: "How long does it take to see results from social media marketing?",
      answer: "It depends on your strategy, consistency, and industry. Some see growth in weeks, others in months. It's a long game—focus on building trust and value, and the results will follow."
    }
  ];

  const leftColumnItems = accordionData.slice(0, 5);
  const rightColumnItems = accordionData.slice(5, 10);

  return (
    <div className="accordion-wrapper-columns">
      {/* Left Column */}
      <div className="accordion-column">
        {leftColumnItems.map((item) => (
          <div key={item.id} className="accordion">
            <input type="checkbox" id={item.id} />
            <label className="accordion-label" htmlFor={item.id}>
              {item.question}
            </label>
            <div className="accordion-content">
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        {rightColumnItems.map((item) => (
          <div key={item.id} className="accordion">
            <input type="checkbox" id={item.id} />
            <label className="accordion-label" htmlFor={item.id}>
              {item.question}
            </label>
            <div className="accordion-content">
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
