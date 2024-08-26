"use client";
import askQuestion from "./lib/fetch";

export default function Home() {
  async function triggerQuestion() {
    await askQuestion(
      "What are the entry-level positions in companies across different industries?"
    );
  }
  return (
    <main>
      <h1>Powering Futures AI</h1>
      <button onClick={() => triggerQuestion()}>Ask questions</button>
    </main>
  );
}
