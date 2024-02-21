export interface ProductPayload {
  name: string;
  description: string;
  country: string;
  currency: string;
  amount: number;
  timeline: string;
  feature: string[];
  serviceId: string;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  country: string;
  currency: string;
  amount: number;
  timeline: string;
  feature: string[];
  serviceId: string;
}

export interface ProductResponse {
  statusCode: number;
  message: string;
  data: ProductData | ProductData[];
}

export interface ProductFormPayload {
  title: string;
  type?: string;
  description?: string;
  compulsory?: boolean;
  productId: string;
}

export interface UpdateProductFormPayload {
  title?: string;
  type?: string;
  description?: string;
  compulsory?: boolean;
}

export interface SubFormPayload {
  subForm: boolean;
  form: FormData[];
}
export interface FormData {
  question?: string;
  options: string[];
  type?: string;
  compulsory: boolean;
  file?: {
    name?: string;
    description?: string;
    link?: string;
    type?: string;
  };
}

export interface ProductFormData {
  id: string;
  title: string | null;
  type: string | null;
  description: string | null;
  productId: string;
}

export interface ProductFormResponse {
  statusCode: number;
  message: string;
  data: ProductFormData | ProductFormData[];
}

export interface ProductSubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  formId: string;
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  dependsOn?: string;
  allowOther?: boolean;
  fileLink?: string;
}

export interface UpdateProductSubFormPayload {
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

export interface ProductSubFormResponseData {
  question?: string | null;
  type?: string | null;
  options?: string[];
  formId: string;
  compulsory?: boolean;
  fileName?: string | null;
  fileType?: string | null;
  dependsOn?: string | null;
  allowOther?: boolean | null;
  fileLink?: string | null;
}

export interface ProductSubFormResponse {
  statusCode: number;
  message: string;
  data: ProductSubFormResponseData | ProductSubFormResponseData[];
}
