export interface UserPayload {
  fullName: string;
  email: string;
  password: string;
  referral: string;
}
export interface UserResponseProps {
  message: string;
  statusCode: number;
  data: UserResponse | UserResponse[];
}

export interface UserResponse {
  id: string;
  fullName: string;
  userName: string | null;
  email: string;
  phone: string | null;
  picture: string | null;
  token?: string;
  refreshToken?: string;
  tokenExpiresIn?: number;
  isVerified: boolean;
  referral: string | null;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
}
