import { it, describe, expect } from "bun:test";
import { app } from "../../..";
import { SERVER_BASE_URL } from "../../utils/api";
import { ENDPOINT, getAirlinesHandler } from ".";

describe("handlers - Airlines", () => {
	it("should throw an error if API KEY is not set", async () => {
		const previousFlightApiKey = Bun.env.FLIGHTS_API_KEY;

		Bun.env.FLIGHTS_API_KEY = "";

		const response = await app.handle(
			new Request(`${SERVER_BASE_URL}${ENDPOINT}`),
		);
		const parsedResponse: Awaited<ReturnType<typeof getAirlinesHandler>> =
			await response.json();

		expect(response.status).toBe(500);
		expect(parsedResponse).toEqual({ message: "API KEY is not set" });

		Bun.env.FLIGHTS_API_KEY = previousFlightApiKey;
	});
});
