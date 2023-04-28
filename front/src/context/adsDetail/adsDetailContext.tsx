import { createContext, useContext, useState } from "react";
import { IAdDetail, IAdDetailContext, IAdDetailContextProps } from "./adsTypes";
import { apiGetAdById } from "../../services/adsDetail/retrieveAdById";
import axios from "axios";
import { useConst, useDisclosure } from "@chakra-ui/hooks";
import { AccessContext } from "../access/accessContext";
import { useNavigate } from "react-router-dom";

export const AdDetailContext = createContext({} as IAdDetailContext)

export const AdDetailProvider = ({ children }: IAdDetailContextProps) => {
    const [adToShow, setAdToShow] = useState<IAdDetail | {}>({})
    const {apiGetUser} = useContext(AccessContext)
    const [modalEditAd, setModalEditAd] = useState<boolean>(false)
    const navigate = useNavigate()

    async function getFullAd(id: string) {
        try {
            const ad = await apiGetAdById(id)
            setAdToShow(ad)
            localStorage.setItem('adToShow', JSON.stringify(ad))
            navigate("/detail")
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
        getFullAd: getFullAd,
        modalEditAd,
        setModalEditAd
    }

    return (
        <AdDetailContext.Provider value={globalValues}>
            {children}
        </AdDetailContext.Provider>
    )
}