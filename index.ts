import { Elysia } from "elysia";
import { getAirlinesHandler } from "./src/handlers/airlines";
import { buildResponse } from "./src/utils/api";

export const app = new Elysia()
	.get("/", () => {
		return buildResponse({ status: "ready" });
	})
	.get("/airlines", getAirlinesHandler)
	.listen(3000, ({ hostname, port }) => {
		console.log(`Running at http://${hostname}:${port}`);
	});
