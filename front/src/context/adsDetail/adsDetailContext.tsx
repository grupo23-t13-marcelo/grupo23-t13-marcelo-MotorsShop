import { createContext, useContext, useState } from "react";
import { IAdDetail, IAdDetailContext, IAdDetailContextProps } from "./adsTypes";
import { apiGetAdById } from "../../services/adsDetail/retrieveAdById";
import axios from "axios";
import { useConst, useDisclosure } from "@chakra-ui/hooks";
import { AccessContext } from "../access/accessContext";

export const AdDetailContext = createContext({} as IAdDetailContext)

export const AdDetailProvider = ({ children }: IAdDetailContextProps) => {
    const [adToShow, setAdToShow] = useState<IAdDetail | {}>({})
    const {apiGetUser} = useContext(AccessContext)

    async function getFullAd(id: string) {
        try {
            const ad = await apiGetAdById(id)
            localStorage.setItem('adToShow', JSON.stringify(ad))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            } else {
                console.log(error)
            }
        }
    }

    const globalValues: IAdDetailContext = {
        adToShow: adToShow,
        setAdToShow: setAdToShow,
        getFullAd: getFullAd
    }

    return (
        <AdDetailContext.Provider value={globalValues}>
            {children}
        </AdDetailContext.Provider>
    )
}