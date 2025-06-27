

import React, { useEffect, useState, useRef } from "react";
import "./aboutstyle.css";

const CounterCard = ({
  target,
  label,
  subtitle,
  suffix = "",
  delay = 0,
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

const CardListCounter = ({ trigger }) => {
  const counters = [
    { target: 21, label: "Years In Business", suffix: "+", delay: 0 },
    { target: 500, label: "Projects", suffix: "+", delay: 300 },
    { target: 1500, label: "Happy Customers", suffix: "+", delay: 600 },
    { target: 880, label: "Tickets Resolved", suffix: "+", delay: 900 },
  ];

  return (
  <div className="w-full flex justify-center overflow-hidden">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-10 max-w-screen-xl">
    {counters.map((item, index) => (
      <CounterCard key={index} {...item} trigger={trigger} />
    ))}
  </div>
</div>

  );
};

export default CardListCounter;

