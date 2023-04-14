import { ReactNode } from "react"

export interface IAccessContextProps {
    children: ReactNode
}

export interface IAccessContext {
    modalstatus: boolean
    setModalstatus: React.Dispatch<React.SetStateAction<boolean>>
}