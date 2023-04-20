import { ReactNode } from "react"
import { IAdInfo } from "../access/accessTypes";

export interface IUserDetail {
    id: string;
    name: string;
    email: string;
    cpf: string;
    cell_phone: string;
    birthdate: Date;
    description: string;
    password: string;
    type: string;
    profile_picture: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    is_active: boolean;
    ads: IAdInfo[];
    address: { cep: string,
        state: string,
        city: string,
        street: string,
        number: string,
        complement?: string | null | undefined};
}

export interface IUserContextProps {
    children: ReactNode;
}

export interface IUserContext {
    user: IUserDetail | null; 
    // setUser: React.Dispatch<React.SetStateAction<IUserDetail | null>>;
}