"use client";
import askQuestion from "./lib/fetch";
import Image from "next/image";
import { useState } from "react";
// import pfLogo from "../PowerFuture.png";

export default function Home() {
  const [reply, setReply] = useState("");

  async function triggerQuestion() {
    console.log("Triggering question…");
    setReply("Analysing…");
    try {
      const response = await askQuestion(
        "Hey im bob can you help me find a job?"
      );
      console.log("Response received:", response);
      setReply(response.choices[0].message.content);
    } catch (error) {
      console.error("Error in triggerQuestion:", error);
    }
  }
  return (
    <main className="grid h-screen w-screen grid-rows-custom bg-fp-green text-slate-100">
      <nav className="  w-screen h-fit p-4">
        <Image
          src="/PowerFuture.png"
          alt="Powering Futures Logo"
          height={120}
          width={160}
        />
      </nav>
      <section className="p-4 flex flex-col gap-2 items-center h-1/2 justify-between">
        <h1>Powering Futures AI</h1>
        <div className="w-1/2">
          <p className=" text-center">{reply}</p>
        </div>
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
