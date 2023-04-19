import { createContext, useEffect, useState } from "react";
import { apiGetListAds } from "../../services/adsApi/adsApi";
import { IAdInfo } from "../access/accessTypes";
import { IHomeContext, IHomeContextProps } from "./homeTypes";

export const HomeContext = createContext({} as IHomeContext)

export const HomeProvider = ({ children }: IHomeContextProps) => {

    const [listAds, setListAd] = useState<IAdInfo[]>([])

    useEffect(() => {
        
        const listAds = async () => {
            const {data} = await apiGetListAds()
            console.log(data)
            setListAd(data)
        }

        listAds()

    }, [])

    const globalHomeValues: IHomeContext = {
        listAds: listAds,
        setListAd: setListAd
    }

    return (
        <HomeContext.Provider value={globalHomeValues}>
            {children}
        </HomeContext.Provider>
    )

}