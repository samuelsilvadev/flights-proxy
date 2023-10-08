export type ApiResponse<SpecificResponse> = {
	response: SpecificResponse;
	date: string;
	version: string;
};

export type ErrorResponse = {
	message: string;
};
