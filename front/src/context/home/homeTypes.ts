import { ReactNode } from "react";
import { IAdInfo, IAdInfoPag } from "../access/accessTypes";

export interface IHomeContextProps {
    children: ReactNode
}

export interface IHomeContext {
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    listAds: IAdInfo[]
    filterLimit: number
    showMoreBrand: string
    setShowMoreBrand: React.Dispatch<React.SetStateAction<string>>
    showMore: string
    setShowMore: React.Dispatch<React.SetStateAction<string>>
    setFilterLimit: React.Dispatch<React.SetStateAction<number>>
    listAdsPag: IAdInfoPag | undefined
    filterLimitBrand: number
    showLessBrand: string
    setShowLessBrand: React.Dispatch<React.SetStateAction<string>>
    showLess: string
    setShowLess: React.Dispatch<React.SetStateAction<string>>
    setFilterLimitBrand: React.Dispatch<React.SetStateAction<number>>
    query: { next: string } | { prev: string } | undefined
    setQuery: React.Dispatch<React.SetStateAction<{ next: string } | { prev: string } | undefined>>
    setListAd: React.Dispatch<React.SetStateAction<IAdInfo[]>>
    filteredAds: IAdInfo[]
    setFilteredAds: React.Dispatch<React.SetStateAction<IAdInfo[]>>
    filterAdsByValue: (min: string, max: string, key: keyof IAdInfo) => void
    filterAdsByTag: (param: string, tag: keyof IAdInfo) => void
    filtersUsed: any
    setFiltersUsed: React.Dispatch<React.SetStateAction<any>>
    handleFilterTagDelete: (val: string) => void
}