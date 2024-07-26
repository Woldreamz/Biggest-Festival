import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 text-gray-900 text-lg cursor-pointer">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-6xl font-bold bg-gradient-to-r from-[#89F9E8] to-[#FACB7B] px-3 py-1 rounded-md">
          {timeLeft.days || "0"}
        </span>
        <span className="text-[#D87CEE]">Days</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-6xl font-bold bg-gradient-to-r from-[#D87CEE] to-[#FACB7B] px-3 py-1 rounded-md">
          {timeLeft.hours || "0"}
        </span>
        <span className="text-[#D87CEE]">Hours</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-6xl font-bold bg-gradient-to-r from-[#9099FC] to-[#89F9E8] px-3 py-1 rounded-md">
          {timeLeft.minutes || "0"}
        </span>
        <span className="text-[#D87CEE]">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-6xl font-bold bg-gradient-to-r from-[#9099FC] to-[#D87CEE] px-3 py-1 rounded-md">
          {timeLeft.seconds || "0"}
        </span>
        <span className="text-[#D87CEE]">Seconds</span>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default Countdown;
