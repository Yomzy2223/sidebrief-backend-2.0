interface DocumentPayload {
  name?: string;
  type?: string;
  link?: string;
  size?: string;
  belongsTo?: string;
  userId: string;
}

interface UpdateDocumentPayload {
  name?: string;
  type?: string;
  link?: string;
  size?: string;
  belongsTo?: string;
}
interface CreatedocumentResponseProps {
  statusCode: number;
  data?: CreateDocumentDataProps | CreateDocumentDataProps[] | [];
  message: string;
}

interface CreateDocumentDataProps {
  id: string;
  name: string | null;
  type: string | null;
  link: string | null;
  size: string | null;
  belongsTo: string | null;
  createdAt: Date;
  updatedAt: Date;
  isDeprecated: boolean;
  userId: string;
}

export { DocumentPayload, CreatedocumentResponseProps, UpdateDocumentPayload };
