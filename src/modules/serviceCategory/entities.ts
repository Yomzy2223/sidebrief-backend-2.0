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

export interface ServiceCategoryFormPayload {
  question: string;
  type: string;
  options: string[];
  serviceCategoryId: string;
  compulsory: boolean;
}

export interface ServiceCategoryFormData {
  id: string;
  question: string;
  type: string;
  options: string[];
  serviceCategoryId: string;
}

export interface ServiceCategoryFormResponse {
  statusCode: number;
  message: string;
  data: ServiceCategoryFormData | ServiceCategoryFormData[];
}

export interface UpdateServiceCategoryFormPayload {
  question: string;
  type: string;
  options: string[];
}
