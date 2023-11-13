export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  referral: string;
  partnerPermission: [];
  staffPermission: [];
  userPermission: [];
}
export interface UserResponseProps {
  message: string;
  statusCode: number;
  data: UserResponse | UserResponse[];
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string | null;
  email: string;
  picture: string | null;
  phone: string | null;
  token?: string;
  refreshToken?: string;
  tokenExpiresIn?: number;
  isVerified: boolean;
  referral: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface ForgotPassword {
  email: string;
}
