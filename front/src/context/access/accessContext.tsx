import { createContext, useState } from "react";
import { IAccessContextProps, IAccessContext } from "./accessTypes";

export const AccessContext = createContext({} as IAccessContext)

export const AccessProvider = ({ children }: IAccessContextProps) => {
    const [modalstatus, setModalstatus] = useState<boolean>(false)

    const globalAccessValues: IAccessContext = {
        modalstatus: modalstatus,
        setModalstatus: setModalstatus,
    }

    return (
        <AccessContext.Provider value={globalAccessValues}>
            {children}
        </AccessContext.Provider>
    )
}