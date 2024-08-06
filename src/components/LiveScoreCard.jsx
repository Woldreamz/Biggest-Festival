import React from "react";

const LiveScoreCard = ({ match }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg p-5 m-4 flex-1 min-w-[250px] text-white transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1 text-center text-lg font-semibold">
          {match.home.name}
        </div>
        <div className="text-2xl font-bold">{match.ss}</div>
        <div className="flex-1 text-center text-lg font-semibold">
          {match.away.name}
        </div>
      </div>
      <div className="text-center mb-4">{match.time.status}</div>
    </div>
  );
};

export default LiveScoreCard;
