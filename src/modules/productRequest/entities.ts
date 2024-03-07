export interface ProductRequestPayload {
  userId: string;
  productId: string;
}

export interface UpdateRequest {
  email: string;
  address: string;
}

export interface FormPayload {
  title?: string;
  type?: string;
  description?: string;
  compulsory?: boolean;
  isGeneral: boolean;
  subForm: FormData[];
}

export interface FormData {
  question: string;
  answer: string[];
  type: string;
  compulsory: boolean;
  file: FileData;
}
export interface FileData {
  name: string;
  link: string;
  type: string;
  size: string;
}

export interface ProfileData {
  question: string;
  answer: string[];
  type: string;
  compulsory: boolean;
}
export interface UpdateProductRequestIdPayload {
  productId: string;
  requestId: string;
}
export interface ProductRequestData {
  id?: string;
  country?: string;
  email?: string | null;
  address?: string | null;
  paid?: Boolean;
  userId?: string;
  completed?: Boolean;
  status?: string;
  currentState?: string;
  createdAt?: Date;
  updatedAt?: Date;
  productId?: string | null;
}
export interface ProductRequestResponse {
  message: string;
  statusCode: 200;
  data: ProductRequestData | ProductRequestData[] | null;
}
export interface ProductRequestWithoutDataResponse {
  message: string;
  statusCode: 200;
}

export interface ProductRequestQAData {
  id: string;
  question: string | null;
  answer?: string[];
  isGeneral?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  productId?: string;
}
export interface ProductRequestQAResponse {
  message: string;
  statusCode: 200;
  data: FormResponse | FormResponse[];
}

export interface FormResponse {
  title?: string | null;
  type?: string | null;
  description?: string | null;
  compulsory?: boolean;
  isGeneral?: boolean;
}
