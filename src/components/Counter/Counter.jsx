import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Counter.css';

const Counter = ({ end, suffix = '', title, variant = 'dark' }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`counter-box counter-${variant}`}>
      <div className="counter-number">
        {inView && (
          <CountUp
            end={end}
            duration={2.5}
            separator=","
            suffix={suffix}
          />
        )}
      </div>
      <div className="counter-title">{title}</div>
    </div>
  );
};

export default Counter;

