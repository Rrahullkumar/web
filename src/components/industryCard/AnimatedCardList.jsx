


import React, { useEffect, useRef, useState } from 'react';
import './animationcard.css';

import Ecomm from "./industries/Ecomm.svg";
import Education from "./industries/Education.svg";
import FinanceBanking from "./industries/Finance-Banking.svg";
import Health from "./industries/health.svg";
import Realstate from "./industries/Real-Estate.svg";
import Restaurants from "./industries/Restaurants.svg";
import Retailers from "./industries/Retailers.svg";
import Startups from "./industries/Startups.svg";
import Technology from "./industries/Technology.svg";
import Travel from "./industries/Travel.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AnimatedCardList = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const directions = ["from-left", "from-right", "from-top", "from-bottom"];

  const ballsData = [
    { id: 1, content: "E-Commerce", icon: Ecomm },
    { id: 2, content: "Healthcare", icon: Health },
    { id: 3, content: "Real Estate", icon: Realstate },
    { id: 4, content: "Education", icon: Education },
    { id: 5, content: "Restaurants", icon: Restaurants },
    { id: 6, content: "Finance & Banking", icon: FinanceBanking },
    { id: 7, content: "Travel & Hospitality", icon: Travel },
    { id: 8, content: "Technology", icon: Technology },
    { id: 9, content: "Retailers", icon: Retailers },
    { id: 10, content: "Startups", icon: Startups },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`animatedcard1 overflow-hidden ${isVisible ? 'visible' : ''}`} >
      <div className="card-list-container1">
        {ballsData.map((ball, i) => {
          const directionClass = isVisible ? directions[i % directions.length] : 'reset';
          return (
            <div
              key={ball.id}
              className={`animated-card1 ${directionClass}`}
              style={{ '--animation-delay': `${i * 0.2}s` }}
            >
              <div className="image_wrapcard1">
                  <LazyLoadImage src={ball.icon} alt={ball.content} />
              </div>
              <p className="text-[14px] text-black font-bold">{ball.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCardList;
