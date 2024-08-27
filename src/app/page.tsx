"use client";
import askQuestion from "./lib/fetch";
import Image from "next/image";
// import pfLogo from "../PowerFuture.png";

export default function Home() {
  async function triggerQuestion() {
    console.log("Triggering question...");
    try {
      const response = await askQuestion(
        "What are the entry-level positions in companies across different industries?"
      );
      console.log("Response received:", response);
    } catch (error) {
      console.error("Error in triggerQuestion:", error);
    }
  }
  return (
    <main className="grid h-screen w-screen grid-rows-custom">
      <nav className=" bg-fp-green w-screen h-fit p-4">
        <Image
          src="/PowerFuture.png"
          alt="Powering Futures Logo"
          height={120}
          width={160}
        />
      </nav>
      <section className="p-4 flex flex-col gap-2 items-center">
        <h1>Powering Futures AI</h1>
        <button
          className="h-fit w-fit px-4 py-2 bg-fp-gold text-slate-50 rounded-md"
          type="button"
          onClick={() => triggerQuestion()}
        >
          Ask questions
        </button>
      </section>
    </main>
  );
}
