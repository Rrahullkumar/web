

import React, { useEffect, useState, useRef } from "react";
import "./CounterCard.css";
import { memo } from "react";
const CounterCard = ({
  target,
  label,
  subtitle,
  suffix = "",
  delay = 100,
  trigger,
}) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const duration = 2000;

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      setCount(Math.floor(progress * target));
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setCount(target);
    }
  };

  useEffect(() => {
    if (trigger) {
      setCount(0); // Reset count on trigger start
      startTimeRef.current = null;

      const timer = setTimeout(() => {
        requestRef.current = requestAnimationFrame(animate);
      }, delay);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(requestRef.current);
      };
    } else {
      // Reset state when trigger is false
      setCount(0);
      startTimeRef.current = null;
      cancelAnimationFrame(requestRef.current);
    }
  }, [trigger, delay, target]);

  return (
    <div className="counter-card">
      <div className="counter-text">
        {count}
        {suffix}
      </div>
      <div className="label">{label}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

const CardListCounter = React.memo(({ trigger }) => {
  const counters = [
    { target: 21, label: "Years of Experience", suffix: "+", delay: 5 },
    { target: 500, label: "Projects Completed", suffix: "+", delay: 400 },
    { target: 1000, label: "Designs Created", suffix: "+", delay: 700 },
    { target: 96, label: "Customer Retention", suffix: "%", delay: 1000 },
  ];

  return (
    <div className="card-grid">
      {counters.map((item, index) => (
        <CounterCard key={index} {...item} trigger={trigger} />
      ))}
    </div>
  );
});

export default CardListCounter;

