export type SuccessResponse = {
	pagination: Pagination;
	data: Flight[];
};

export type Flight = {
	id: string;
	fleet_average_age: string;
	airline_id: string;
	callsign: string;
	hub_code: string;
	iata_code: string;
	icao_code: string;
	country_iso2: string;
	date_founded: string;
	iata_prefix_accounting: string;
	airline_name: string;
	country_name: string;
	fleet_size: string;
	status: string;
	type: string;
};

export type Pagination = {
	offset: number;
	limit: number;
	count: number;
	total: number;
};
