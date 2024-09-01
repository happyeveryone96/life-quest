// components/JobRecommendation.tsx
import React, { useState, useEffect } from "react";
import { recommendJob } from "../services/jobService";

export default function JobRecommendation({
  userBehavior,
}: {
  userBehavior: string;
}) {
  const [recommendedJob, setRecommendedJob] = useState<string>("");

  useEffect(() => {
    const getRecommendation = async () => {
      const job = await recommendJob(userBehavior);
      setRecommendedJob(job);
    };

    getRecommendation();
  }, [userBehavior]);

  return (
    <div>
      <h2>Recommended Job</h2>
      <p>{recommendedJob || "Loading..."}</p>
    </div>
  );
}
