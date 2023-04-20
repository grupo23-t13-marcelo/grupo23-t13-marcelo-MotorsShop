import { createContext, useState } from "react";
import axios from "axios";
import { apiGetUserLogged } from "../../services/userLogged/loggeduser";
import { IUserDetail,  IUserContext, IUserContextProps } from "./userTypes";

export const userLoggedContext = createContext({} as IUserContext)

export const getUser = ({ children }:IUserContextProps ) => {
    const [user, setUser] = useState<IUserDetail | null>(null)

    async function getUserLogge() {
        try {
            const response = await apiGetUserLogged();
            const { data } = response;
            const user: IUserDetail = {
                id:data.id,
                name: data.name,
                description: data.description,
                cell_phone:data.cell_phone,
                cpf:data.cpf,
                email:data.email,
                profile_picture: data.profile_picture,
                type: data.type,
                birthdate:data.birthdate,
                password: data.password,
                created_at:data.created_at,
                updated_at: data.updated_at,
                deleted_at: data.deleted_at,
                is_active: data.is_active,
                ads: data.ads,
                address:data.address
            };
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    }
    const globalUserValues: IUserContext = {
        user: user,
        // setUser: setUser,
    }

    return (
        <userLoggedContext.Provider value={globalUserValues}>
            {children}
        </userLoggedContext.Provider>
    )
}