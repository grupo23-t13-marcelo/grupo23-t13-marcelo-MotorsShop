import { createContext, useState } from "react";
import { IAdDetail, IAdDetailContext, IAdDetailContextProps } from "./adsTypes";
import { apiGetAdById } from "../../services/adsDetail/retrieveAdById";
import axios from "axios";

export const AdDetailContext = createContext({} as IAdDetailContext)

export const AdDetailProvider = ({ children }: IAdDetailContextProps) => {
    const [adToShow, setAdToShow] = useState<IAdDetail | {}>({})

    async function getFullAd(id: string) {
        try {
            const ad = await apiGetAdById(id)
            setAdToShow(ad)
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
        setAdToShow: setAdToShow
    }

    return (
        <AdDetailContext.Provider value={globalValues}>
            {children}
        </AdDetailContext.Provider>
    )
}