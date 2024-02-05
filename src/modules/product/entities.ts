export interface ProductPayload {
  userId: string;
}
export interface FormPayload {
  form: FormData[];
}

export interface FormData {
  question: string;
  answer: string[];
  type: string;
  compulsory: boolean;
  isGeneral: boolean;
  file: FileData;
  subForm: boolean;
  profile: ProfileData[];
}
export interface FileData {
  name: string;
  description: string;
  link: string;
  type: string;
}

export interface ProfileData {
  question: string;
  answer: string[];
  type: string;
  compulsory: boolean;
}
export interface UpdateProductServiceIdPayload {
  serviceId: string;
  productId: string;
}
export interface ProductData {
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
  serviceId?: string | null;
}
export interface ProductResponse {
  message: string;
  statusCode: 200;
  data: ProductData | ProductData[] | null;
}
export interface ProductWithoutDataResponse {
  message: string;
  statusCode: 200;
}

export interface ProductQAData {
  id: string;
  question: string | null;
  answer?: string[];
  isGeneral?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  productId?: string;
}
export interface ProductQAResponse {
  message: string;
  statusCode: 200;
  data: ProductQAData | ProductQAData[];
}
