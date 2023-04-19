import { ReactNode } from "react";
import { IAdInfo } from "../access/accessTypes";

export interface IHomeContextProps {
    children: ReactNode
}

export interface IHomeContext {
    listAds: IAdInfo[]
    setListAd: React.Dispatch<React.SetStateAction<IAdInfo[]>>
}