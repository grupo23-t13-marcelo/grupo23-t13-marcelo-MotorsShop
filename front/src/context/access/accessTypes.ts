import { ReactNode } from "react"
import { ILogin } from "../../pages/loginPage/login"

export interface IAccessContextProps {
    children: ReactNode
}

export interface IAccessContext {
    modalstatus: boolean
    setModalstatus: React.Dispatch<React.SetStateAction<boolean>>
    apiPostLogin: (formData: ILogin) => void
}