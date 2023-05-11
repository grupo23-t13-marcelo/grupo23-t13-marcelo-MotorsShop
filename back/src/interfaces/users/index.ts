import { Ads } from "../../entities/ads.entities";
import { User, UserType } from "../../entities/users.entities";

export interface IUser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cell_phone: string;
    birthdate: Date;
    description: string;
    password: string;
    type: UserType;
    profile_picture: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    is_active: boolean;
    address: Address
    ads?: Ads[];
  }

  interface Address {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface ISendEmailRequest {
    to: string
    subject: string
    text: string
    html: string
  }