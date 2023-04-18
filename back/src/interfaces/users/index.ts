import { Ads } from "../../entities/ads.entities";
import { UserType } from "../../entities/users.entities";

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
    ads?: Ads[];
  }