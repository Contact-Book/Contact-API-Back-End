export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_number: number;
  contacts?: IContact[];
  is_active?: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone_number: number;
  is_active?: boolean;
  reference_id: String;
  created_at: Date;
  updated_at: Date;
}

export interface IContactRequest {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  reference_id: string;
}

export interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone_number?: string;
  user_id?: string;
  is_active?: boolean;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone_number?: string;
  contact_id?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
