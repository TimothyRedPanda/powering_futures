"use client";
import askQuestion from "./lib/fetch";
import Image from "next/image";
import { useState } from "react";
import { sanitizeInput } from "../../utils/sanitizeInput";

export default function Home() {
	const defaultText = `Starting your career path can feel like a big step, but we're here to help make it easier. Whether you’re into tech, design, working with your hands, or helping others, there’s a role out there for you—and we’re here to help you find it!

Answer a few simple questions about what you enjoy doing, and we’ll suggest some career options that could be a great fit. Remember, these are just the first steps in exploring your future, and there are plenty of paths to choose from.

Let’s get started on finding the right job for you!`;

	const [reply, setReply] = useState("");
	const [question, setQuestion] = useState(defaultText);
	const [title, setTitle] = useState("Welcome to your career journey");



	async function triggerQuestion() {
		console.log("Triggering question…");
		setReply("Analysing…");
		try {
			const response = await askQuestion(question);
			console.log("Response received:", response);
			setReply(response.choices[0].message.content);
			setTitle("");
		} catch (error) {
			console.error("Error in triggerQuestion:", error);
		}
	}
	return (
		<main className="grid h-screen w-screen grid-rows-custom bg-fp-green text-slate-100">
			<nav className=" w-screen h-fit p-6">
				<Image
					src="/PowerFuture.png"
					alt="Powering Futures Logo"
					height={120}
					width={160}
				/>
			</nav>
			<section className="p-4 flex flex-col gap-2 items-center h-[90%] justify-between">
				<section className="w-3/4 flex flex-col gap-6">
					<h1 className="text-6xl">{title}</h1>
					<p
						className={`p-4 rounded-md bg-slate-800 w-fit ${question ? "bg-slate-800" : "bg-transparent"}`}
					>
						{question}
					</p>
					<p className="whitespace-pre-wrap">{reply}</p>
				</section>
				<section className="w-3/4 flex justify-center items-center gap-2 bg-slate-50 p-2 rounded-md">
					<textarea
						className="text-slate-800 border-none w-full px-4 py-2 outline-1 outline-fp-gold bg-slate-50"
						onChange={(e) => setQuestion(sanitizeInput(e.target.value))}
						placeholder="Ask a question…"
					/>
					<button
						className="h-full w-fit text-xl px-6 py-2 bg-fp-gold text-slate-50 rounded-md"
						type="button"
						onClick={() => triggerQuestion()}
					>
						Send
					</button>
				</section>
			</section>
		</main>
	);
}
