interface BankPayload {
  name: string;
  code: string;
  url: string;
  image: string;
}

interface CreateBankResponseProps {
  statusCode: number;
  data?: CreateBankDataProps | CreateBankDataProps[] | [];
  message: string;
}

interface CreateBankDataProps {
  id: number;
  name: string;
  code: string;
  url: string;
  message: string;
}

export { BankPayload, CreateBankResponseProps, CreateBankDataProps };
