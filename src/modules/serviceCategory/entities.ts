export interface ServiceCategoryPayload {
  name: string;
  description: string;
}
export interface ServiceCategoryData {
  id: string;
  name: string;
  description: string;
}

export interface ServiceCategoryResponse {
  statusCode: number;
  message: string;
  data: ServiceCategoryData | ServiceCategoryData[];
}
