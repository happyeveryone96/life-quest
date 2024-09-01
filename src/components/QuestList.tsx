// components/QuestList.tsx
// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
// import { Quest } from "../types/Quest";

// export default function QuestList() {
//   const {
//     data: quests,
//     error,
//     isLoading,
//   } = useQuery<Quest[]>(["quests"], async () => {
//     const querySnapshot = await getDocs(collection(db, "quests"));
//     return querySnapshot.docs.map(
//       (doc) => ({ id: doc.id, ...doc.data() } as Quest)
//     );
//   });

//   if (isLoading) return <div>Loading quests...</div>;
//   if (error) return <div>Error loading quests: {error.message}</div>;

//   return (
//     <ul>
//       {quests?.map((quest) => (
//         <li key={quest.id}>
//           <h3>{quest.title}</h3>
//           <p>{quest.description}</p>
//           <p>Reward: {quest.reward} points</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
"use client";

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Quest } from "../types/Quest";
import { generateQuest } from "../services/questService";

export default function QuestList() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<Quest[]>({
    queryKey: ["quests"],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "quests"));
      return querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Quest)
      );
    },
    staleTime: 5000, // 이 예시에서 5초 동안 데이터가 신선하게 유지됨
  });

  const generateQuest2 = async () => {
    const response = await fetch("/api/generate");
    const quest = await response.json();
    console.log(quest);
  };

  const handleGenerateQuest = async () => {
    generateQuest2();

    console.log(123);
    await generateQuest(); // 퀘스트 생성
    console.log(1111);
    queryClient.invalidateQueries({ queryKey: ["quests"] }); // 퀘스트 목록을 새로고침
  };
  console.log(data);

  if (isLoading) return <div>Loading quests...</div>;
  if (error) return <div>Error loading quests: {error.message}</div>;

  return (
    <div>
      <button onClick={handleGenerateQuest}>Generate New Quest</button>
      <ul>
        {data?.map((quest) => (
          <li key={quest.id}>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
            <p>Reward: {quest.reward} points</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
