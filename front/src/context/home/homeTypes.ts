import { ReactNode } from "react";
import { IAdInfo } from "../access/accessTypes";

export interface IHomeContextProps {
    children: ReactNode
}

export interface IHomeContext {
    listAds: IAdInfo[]
    setListAd: React.Dispatch<React.SetStateAction<IAdInfo[]>>
    filteredAds: IAdInfo[]
    setFilteredAds: React.Dispatch<React.SetStateAction<IAdInfo[]>>
    filterAdsByValue: (min: string, max: string, key: keyof IAdInfo) => void
    filterAdsByTag: (param: string, tag: keyof IAdInfo) => void
    filtersUsed: any
    setFiltersUsed: React.Dispatch<React.SetStateAction<any>>
    handleFilterTagDelete: (val: string) => void
}