export interface CountryPayload {
  name: string;
  iso: string;
  flagUrl: string;
  code: string;
  currency: string;
}

export interface CountryData {
  id: string;
  name: string;
  iso: string;
  flagUrl: string;
  code: string;
  currency: string;
}

export interface CountryResponse {
  message: string;
  statusCode: number;
  data: CountryData | CountryData[];
}
