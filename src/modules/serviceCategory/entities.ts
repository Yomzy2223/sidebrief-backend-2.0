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
  title: string;
  type: string;
  description: string;
  serviceCategoryId: string;
  compulsory: boolean;
}

export interface ServiceCategorySubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  formId: string;
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  allowOther?: boolean;
  fileLink?: string;
  dependsOn?: string;
}

export interface ServiceCategoryFormData {
  id: string;
  title: string | null;
  type: string | null;
  description: string | null;
  serviceCategoryId: string;
}

export interface ServiceCategorySubFormData {
  id: string;
  question: string | null;
  type: string | null;
  options: string[];
  formId: string;
}

export interface ServiceCategoryFormResponse {
  statusCode: number;
  message: string;
  data: ServiceCategoryFormData | ServiceCategoryFormData[];
}

export interface ServiceCategorySubFormResponse {
  statusCode: number;
  message: string;
  data: ServiceCategorySubFormData | ServiceCategorySubFormData[];
}

export interface UpdateServiceCategoryFormPayload {
  title: string;
  type: string;
  description: string;
  compulsory: boolean;
}

export interface UpdateServiceCategorySubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  dependsOn?: string;
  allowOther?: boolean;
  fileLink?: string;
}
