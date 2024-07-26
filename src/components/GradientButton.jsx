import React from "react";

const GradientButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
};

export default GradientButton;
