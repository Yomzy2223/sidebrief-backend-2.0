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
  id: string;
  name: string;
  code: string;
  url: string;
  image: string;
}

export { BankPayload, CreateBankResponseProps, CreateBankDataProps };
