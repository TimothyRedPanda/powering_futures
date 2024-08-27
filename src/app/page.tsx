"use client";
import askQuestion from "./lib/fetch";

export default function Home() {
	async function triggerQuestion() {
		console.log("Triggering question...");
		try {
			const response = await askQuestion(
				"What are the entry-level positions in companies across different industries?",
			);
			console.log("Response received:", response);
		} catch (error) {
			console.error("Error in triggerQuestion:", error);
		}
	}
	return (
		<main className="grid h-screen w-screen grid-rows-custom">
			<nav className=" bg-fp-green w-screen h-20 p-4">Hello</nav>
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
