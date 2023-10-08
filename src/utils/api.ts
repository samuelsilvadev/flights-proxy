import type { ApiResponse } from "../types/globals";

export const SERVER_BASE_URL = "http://localhost:3000";
export const FLIGHTS_BASE_API = "http://api.aviationstack.com/v1";
export const API_VERSION = "1";

export function buildDefaultHeaders() {
	return { "Content-Type": "application/json" };
}

export function buildResponse<SpecificResponse>(
	response: SpecificResponse,
): ApiResponse<SpecificResponse> {
	return {
		response,
		date: new Date().toISOString(),
		version: API_VERSION,
	};
}
