import { Elysia } from "elysia";
import { getAirlinesHandler } from "./src/handlers/airlines";

new Elysia()
	.get("/", () => {
		return new Response(
			JSON.stringify({
				status: "ready",
			}),
			{ headers: { "Content-Type": "application/json" } },
		);
	})
	.get("/airlines", getAirlinesHandler)
	.listen(3000);
