export interface PaymentPayload {
  email?: string;
  currency?: string;
  amount?: string;
  card_number?: string;
  card_pin?: string;
  cvv?: string;
  expiry_month?: string;
  expiry_year?: string;
  account_bank?: string;
  type?: string;
  requestId?: string;
  productId?: string;
}
export interface ConfirmPayload {
  email?: string;
  requestId?: string;
}

export interface OtpPayload {
  flw_ref?: string;
  email?: string;
  otp?: string;
  amount?: string;
  currency?: string;
}

export interface PaymentVerificationPayload {
  id?: string;
  amount?: string;
  currency?: string;
}
