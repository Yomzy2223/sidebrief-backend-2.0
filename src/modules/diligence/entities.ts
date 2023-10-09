//Nigerian Banks
export interface CreateNigerianBankPayload {
  name: string;
  slug: string;
  color: string;
  logo: string;
}

export interface NigerianBankData {
  name: string;
  slug: string;
  color: string | null;
  logo: string;
}
export interface CreateNigerianBankResponse {
  message: string;
  statusCode: number;
  data: NigerianBankData | NigerianBankData[];
}

//enterprise
export interface CreateEnterprisePayload {
  name: string;
  address: string;
  adminEmail: string;
  color: string;
  logo: string;
  backdrop: string;
}

export interface UpdateEnterprisePayload {
  name: string;
  address: string;
  color: string;
  logo: string;
  backdrop: string;
}

export interface EnterpriseResponse {
  statusCode: number;
  message: string;
  data: {
    name: string;
    address: string;
    adminEmail: string;
    color: string | null;
    logo: string | null;
    backdrop: string | null;
  };
}

//Manager
export interface ManagerPayload {
  name: string;
  location: string;
  managerEmail: string;
  diligenceEnterpriseId: string;
}

export interface ManagerData {
  name: string | null;
  location: string | null;
  managerEmail: string;
  diligenceEnterpriseId: string;
}

export interface UpdateManagerData {
  name: string | null;
  location: string | null;
  managerEmail: string;
}

export interface ManagerResponse {
  statusCode: number;
  message: string;
  data: ManagerData | ManagerData[];
}

export interface StaffData {
  email: string;
}

export interface StaffResponse {
  statusCode: number;
  message: string;
  data: StaffData | StaffData[];
}

//diligence user
export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token?: string;
  role: string;
  enterpriseId?: string;
  managerId?: string | null;
  managerEmail?: string | null;
}

export interface UserResponse {
  statusCode: number;
  message: string;
  data: UserData;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
}

//request

export interface UpdateRequestPayload {
  name: string;
  registrationNumber: string;
}

export interface RequestPayload {
  name: string;
  registrationNumber: string;
  status: string;
  createdBy: string;
  diligenceEnterpriseId: string;
}

export interface RequestData {
  name: string;
  registrationNumber: string;
  status: string;
  createdBy: string;
  diligenceEnterpriseId: string;
}

export interface RequestResponse {
  statusCode: number;
  data: RequestData | RequestData[];
  message: string;
}

export interface RequestDocumentPayload {
  name: string;
  type: string;
  description: string;
  link: string;
  diligenceRequestId: string;
}

export interface UpdateRequestDocumentPayload {
  name: string;
  type: string;
  description: string;
  link: string;
}

export interface RequestDocumentData {
  id: string;
  name: string;
  type: string;
  description: string;
  link: string;
  diligenceRequestId: string;
}

export interface RequestDocumentResponse {
  statusCode: number;
  data: RequestDocumentData | RequestDocumentData[];
  message: string;
}

export interface StaffRequestData {
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
  num_requests: number;
}

export interface StaffRequestResponse {
  data: StaffRequestData | StaffRequestData[];
  statusCode: number;
  message: string;
}
