import React, { useEffect, useState } from "react";
import axios from "axios";
import LiveScoreCard from "./LiveScoreCard";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const token = import.meta.env.VITE_API_TOKEN;
        const response = await axios.get(
          "https://api.b365api.com/v1/bet365/result",
          {
            params: {
              token: token,
              event_id: 63543522, // Example event_id, replace with actual or dynamic event_ids
            },
          }
        );
        setMatches(response.data.results);
      } catch (error) {
        console.error("Error fetching live scores:", error);
        // Mock data for illustration in case of error
        setMatches([
          {
            home: { name: "Team A" },
            away: { name: "Team B" },
            ss: "1 - 2",
            time: { status: "Ongoing" },
          },
          {
            home: { name: "Team C" },
            away: { name: "Team D" },
            ss: "0 - 0",
            time: { status: "Upcoming" },
          },
        ]);
      }
    };

    fetchLiveScores();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Live Scores</h1>
      <div className="flex flex-wrap justify-center m-5">
        {matches.map((match, index) => (
          <LiveScoreCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default LiveScores;
