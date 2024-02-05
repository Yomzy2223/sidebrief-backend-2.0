export interface ProductServicePayload {
  name: string;
  type: string;
  code: string;
  description: string;
  country: string;
  price: string;
  timeline: string;
  feature: string[];
  numberOfShares: string;
  serviceCategoryId: string;
}

export interface ProductServiceData {
  id: string;
  name: string;
  type: string;
  code: string;
  description: string;
  country: string;
  price: string;
  timeline: string;
  feature: string[];
  numberOfShares: string;
  serviceCategoryId: string;
}

export interface ProductServiceResponse {
  statusCode: number;
  message: string;
  data: ProductServiceData | ProductServiceData[];
}

export interface ServiceFormPayload {
  title?: string;
  type?: string;
  description?: string;
  compulsory?: boolean;
  serviceId: string;
}

export interface UpdateServiceFormPayload {
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

export interface ServiceFormData {
  id: string;
  title: string | null;
  type: string | null;
  description: string | null;
  serviceId: string;
}

export interface ServiceFormResponse {
  statusCode: number;
  message: string;
  data: ServiceFormData | ServiceFormData[];
}

export interface ServiceSubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  serviceFormId: string;
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  fileDescription?: string;
  fileLink?: string;
}

export interface UpdateServiceSubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  fileDescription?: string;
  fileLink?: string;
}

export interface ServiceSubFormResponseData {
  question?: string | null;
  type?: string | null;
  options?: string[];
  serviceFormId: string;
  compulsory?: boolean;
  fileName?: string | null;
  fileType?: string | null;
  fileDescription?: string | null;
  fileLink?: string | null;
}

export interface ServiceSubFormResponse {
  statusCode: number;
  message: string;
  data: ServiceSubFormResponseData | ServiceSubFormResponseData[];
}
