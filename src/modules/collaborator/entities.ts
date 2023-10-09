export interface CollaboratorPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  isPartner: boolean;
  verified: boolean;
}
export interface CreateCollaboratorResponseProps {
  statusCode: number;
  data?: CreateCollaboratorDataProps;
  message: string;
}

export interface CreateCollaboratorDataProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isPartner: boolean;
  verified: boolean;
  picture: string | null;
}
export interface LoginProps {
  email: string;
  password: string;
}

export interface CollaboratorDocumentProps {
  name: string;
  type: string;
  description: string;
  collaboratorId: string;
  link: string;
}
export interface CollaboratorDocumentResponseProps {
  message: string;
  statusCode: number;
  data: CollaboratorDocumentDataProps;
}

export interface CollaboratorDocumentDataProps {
  id: string;
  name: string;
  type: string;
  description: string;
  //   link: string;
  collaboratorId: string;
}
