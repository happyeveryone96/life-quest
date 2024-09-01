// src/app/quests/page.tsx
import React from "react";
import QuestList from "../../components/QuestList";

export default function QuestsPage() {
  return (
    <div>
      <h2>Available Quests</h2>
      <QuestList />
    </div>
  );
}
