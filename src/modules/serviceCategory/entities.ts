export interface ServicePayload {
  name: string;
  description: string;
}
export interface ServiceData {
  id: string;
  name: string;
  description: string;
}

export interface ServiceResponse {
  statusCode: number;
  message: string;
  data: ServiceData | ServiceData[];
}

export interface ServiceFormPayload {
  title: string;
  type: string;
  description: string;
  serviceId: string;
  compulsory: boolean;
}

export interface ServiceSubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  formId: string;
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  allowOther?: boolean;
  fileLink?: string;
  fileSize?: string;
  dependentField?: string;
  dependentOptions?: string[];
}

export interface Dependant {
  field?: string;
  options?: string[];
}

export interface ServiceFormData {
  id: string;
  title: string | null;
  type: string | null;
  description: string | null;
  serviceId: string;
}

export interface ServiceSubFormData {
  id: string;
  question: string | null;
  type: string | null;
  options: string[];
  formId: string | null;
  compulsory: Boolean;
  fileName: string | null;
  fileLink: string | null;
  fileType: string | null;
  fileSize: string | null;
  allowOther: Boolean;
  dependsOn: {
    field: string | null;
    options: string[];
  };
  createdAt: Date | null;
  updatedAt: Date | null;
  isDeprecated: boolean;
}

export interface ServiceFormResponse {
  statusCode: number;
  message: string;
  data: ServiceFormData | ServiceFormData[];
}

export interface ServiceSubFormResponse {
  statusCode: number;
  message: string;
  data: ServiceSubFormData | ServiceSubFormData[];
}

export interface UpdateServiceFormPayload {
  title: string;
  type: string;
  description: string;
  compulsory: boolean;
}

export interface UpdateServiceSubFormPayload {
  question?: string;
  type?: string;
  options?: string[];
  compulsory?: boolean;
  fileName?: string;
  fileType?: string;
  allowOther?: boolean;
  fileLink?: string;
  fileSize: string;
  dependentField?: string;
  dependentOptions?: string[];
}
