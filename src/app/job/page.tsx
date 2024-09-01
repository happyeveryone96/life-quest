// src/app/job/page.tsx
import React from "react";
import JobRecommendation from "../../components/JobReCommendation";

export default function JobPage() {
  const userBehavior = "completed several JavaScript quests"; // This would be dynamic in a real app

  return (
    <div>
      <h2>Job Recommendation</h2>
      {/* <JobRecommendation userBehavior={userBehavior} /> */}
    </div>
  );
}
