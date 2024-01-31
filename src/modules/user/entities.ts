export interface UserPayload {
  fullName: string;
  email: string;
  password: string;
  referral: string;
  isPartner: boolean;
  isStaff: boolean;
}
export interface UserWithGooglePayload {
  fullName: string;
  email: string;
  googleId: string;
  isPartner: boolean;
  isStaff: boolean;
}

export interface UserResponseProps {
  message: string;
  statusCode: number;
  data: UserResponse | UserResponse[];
}

export interface UserResponse {
  id: string;
  fullName: string;
  userName?: string | null;
  email: string;
  phone: string | null;
  picture: string | null;
  token?: string;
  refreshToken?: string;
  tokenExpiresIn?: number;
  isVerified?: boolean;
  referral?: string | null;
  isPartner?: boolean;
  isStaff?: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserLoginWithGoogle {
  email: string;
  googleId: string;
}
export interface ForgotPassword {
  email: string;
}
