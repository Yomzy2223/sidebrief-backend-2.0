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
  question: string;
  type: string;
  options: string[];
  compulsory: boolean;
  serviceId: string;
  fileName: string;
  fileDescription: string;
  fileLink: string;
  fileType: string;
}

export interface UpdateServiceFormPayload {
  question: string;
  type: string;
  options: string[];
  compulsory: boolean;
  fileName: string;
  fileDescription: string;
  fileLink: string;
  fileType: string;
}

export interface SubFormPayload {
  subForm: boolean;
  form: FormData[];
}
export interface FormData {
  question: string;
  options: string[];
  type: string;
  compulsory: boolean;
  file: {
    name: string;
    description: string;
    link: string;
    type: string;
  };
}

export interface ServiceFormData {
  id: string;
  question: string;
  type: string;
  options: string[];
  serviceId: string;
}

export interface ServiceFormResponse {
  statusCode: number;
  message: string;
  data: ServiceFormData | ServiceFormData[];
}
