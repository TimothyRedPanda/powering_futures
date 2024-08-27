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
			// Handle the response here, e.g., display it in the UI
		} catch (error) {
			console.error("Error in triggerQuestion:", error);
		}
	}
	return (
		<main className="grid place-content-center p-4 gap-4">
			<h1>Powering Futures AI</h1>
			<button
				className="px-4 py-2 bg-green-900 text-slate-50 rounded-md"
				type="button"
				onClick={() => triggerQuestion()}
			>
				Ask questions
			</button>
		</main>
	);
}
