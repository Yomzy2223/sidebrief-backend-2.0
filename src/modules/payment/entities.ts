export interface PaymentPayload {
  userId?: string;
  tx_ref?: string;
  email?: string;
  currency?: string;
  amount?: string;
  card_number?: string;
  cvv?: string;
  expiry_month?: string;
  expiry_year?: string;
  account_bank?: string;
  type?: string;
}
