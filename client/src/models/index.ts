import { Dispatch, SetStateAction } from "react";

export interface ContactProperties {
  birthday: string | null;
  createdate: string;
  email: string;
  firstname: string;
  hs_object_id: string;
  lastmodifieddate: string;
  lastname: string;
}

export interface Contact {
  id: string;
  properties: ContactProperties;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export interface FormattedData {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
}

export interface ErrorPopupProps {
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
}
