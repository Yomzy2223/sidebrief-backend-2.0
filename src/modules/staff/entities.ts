export interface StaffPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  verified: boolean;
}

export interface StaffResponseProps {
  message: string;
  statusCode: number;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    picture: string | null;
    token?: string;
    verified: boolean;
  };
}

export interface StaffLogin {
  email: string;
  password: string;
}

export interface ChangePasswordPayload {
  token: string;
  password: string;
}
