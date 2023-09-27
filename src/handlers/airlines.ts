import { Context } from "elysia";

const BASE_API = "http://api.aviationstack.com/v1";
const ENDPOINT = "/airlines";
const API_VERSION = "1";

function buildResponse(response: unknown) {
	return JSON.stringify({
		originalResponse: response,
		date: new Date().toISOString(),
		version: API_VERSION,
	});
}

function buildDefaultHeaders() {
	return { "Content-Type": "application/json" };
}

export async function getAirlinesHandler(context: Context) {
	try {
		const response = await fetch(
			`${BASE_API}${ENDPOINT}?${new URLSearchParams({
				access_key: process.env.FLIGHTS_API_KEY || "",
			})}`,
		);
		const parsedResponse = await response.json();

		return new Response(buildResponse(parsedResponse), {
			headers: buildDefaultHeaders(),
		});
	} catch (error) {}
}
