// src/app/page.tsx
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to LifeQuest</h1>
      <nav>
        <ul>
          <li>
            <Link href="/quests">Quests</Link>
          </li>
          <li>
            <Link href="/chat">Community Chat</Link>
          </li>
          <li>
            <Link href="/products">Virtual Store</Link>
          </li>
          <li>
            <Link href="/job">Job Recommendation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
