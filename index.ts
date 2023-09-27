import { Elysia } from "elysia";

new Elysia()
	.get("/", () => {
		return new Response(
			JSON.stringify({
				status: "ready",
			}),
			{ headers: { "Content-Type": "application/json" } },
		);
	})
	.listen(3000);
