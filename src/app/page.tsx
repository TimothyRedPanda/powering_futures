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
		<main>
			<h1>Powering Futures AI</h1>
			<button type="button" onClick={() => triggerQuestion()}>Ask questions</button>
		</main>
	);
}
