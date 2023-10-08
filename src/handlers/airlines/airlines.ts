import { Context } from "elysia";
import { FLIGHTS_BASE_API, buildResponse } from "../../utils/api";
import type { ApiResponse, ErrorResponse } from "../../types/globals";
import type { SuccessResponse } from "./types";

export const ENDPOINT = "/airlines";

export async function getAirlinesHandler(
	context: Context,
): Promise<ApiResponse<SuccessResponse> | ErrorResponse> {
	if (!Bun.env.FLIGHTS_API_KEY) {
		context.set.status = 500;

		return { message: "API KEY is not set" };
	}

	try {
		const response = await fetch(
			`${FLIGHTS_BASE_API}${ENDPOINT}?${new URLSearchParams({
				access_key: Bun.env.FLIGHTS_API_KEY,
			})}`,
		);
		const parsedResponse = await response.json();

		return buildResponse(parsedResponse);
	} catch (error) {
		context.set.status = 500;

		return {
			message:
				"Something unexpected happened, check the logs for more details.",
		};
	}
}
