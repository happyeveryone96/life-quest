// src/components/ChatRoom.tsx
"use client";

import React, { useEffect, useState } from "react";
import { realtimeDb } from "../firebase";
import { ref, onValue, push } from "firebase/database";

interface Message {
  text: string;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const messagesRef = ref(realtimeDb, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList: Message[] = data ? Object.values(data) : [];
      setMessages(messagesList);
    });
  }, []);

  const sendMessage = async () => {
    try {
      const messagesRef = ref(realtimeDb, "messages");
      await push(messagesRef, { text: newMessage });
      setNewMessage("");
      setError(null);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default ChatRoom;
