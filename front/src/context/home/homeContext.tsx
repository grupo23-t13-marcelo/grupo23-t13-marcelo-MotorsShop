import { createContext, useEffect, useState } from "react";
import { apiGetListAds } from "../../services/adsApi/adsApi";
import { IAdInfo } from "../access/accessTypes";
import { IHomeContext, IHomeContextProps } from "./homeTypes";
import { currency } from "../../pages/adsDetail/adsDetail";

export const HomeContext = createContext({} as IHomeContext)

export const HomeProvider = ({ children }: IHomeContextProps) => {

    const [listAds, setListAd] = useState<IAdInfo[]>([])
    const [filteredAds, setFilteredAds] = useState<IAdInfo[]>([])
    const [filtersUsed, setFiltersUsed] = useState<any>({})


    useEffect( () => {

        const listAds = async () => {
            const { data } = await apiGetListAds()
            
            setListAd(data)
        }

        listAds()

    }, [filtersUsed, setFiltersUsed])

    const filterAdsByTag = (param: string, tag: keyof IAdInfo) => {
        if (filteredAds.length > 0) {
            const filteredAdsList: IAdInfo[] = filteredAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]

            const filters = { ...filtersUsed, [tag]: param }

            setFiltersUsed(filters)

            setFilteredAds(filteredAdsList)
        } else {
            const filteredAdsList: IAdInfo[] = listAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]

            const filtereAdsSet = new Set([...filteredAdsList, ...filteredAds])

            const filteredAdsArray = Array.from(filtereAdsSet)

            const filters = { ...filtersUsed, [tag]: param }

            setFiltersUsed(filters)

            setFilteredAds(filteredAdsArray)
        }
    }

    const updateFilteredAdsAfterTagRemoval = (param: string, tag: keyof IAdInfo, iteration: number) => {
        let filteredAdsList: IAdInfo[] = []

        if (iteration === 0) {
            if (tag === 'mileage' || tag === 'price') {
                const info = param.split(' ')

                const values: number[] = []

                info.forEach((el) => {
                    if (!isNaN(parseInt(el))) {
                        values.push(parseInt(el))
                    }
                })

                if (info.includes("partir") && info.includes("até")) {
                    filteredAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) >= values[0] && parseInt(ad[`${tag}`] as string) <= values[1])

                } else if (info.includes("partir") && !info.includes("até")) {
                    filteredAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) >= values[0])

                } else if (info.includes("Até") && !info.includes('partir')) {
                    filteredAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) <= values[0])

                }
            } else {
                filteredAdsList = listAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]
            }
        } else {
            if (tag === 'mileage' || tag === 'price') {
                const info = param.split(' ')

                const values: number[] = []

                info.forEach((el) => {
                    if (!isNaN(parseInt(el))) {
                        values.push(parseInt(el))
                    }
                })

                if (info.includes("partir") && info.includes("até")) {
                    filteredAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) >= values[0] && parseInt(ad[`${tag}`] as string) <= values[1])

                } else if (info.includes("partir") && !info.includes("até")) {
                    filteredAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) >= values[0])

                } else if (info.includes("Até") && !info.includes('partir')) {
                    filteredAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${tag}`] as string) <= values[0])

                }
            } else {
                filteredAdsList = filteredAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]
            }
        }

        const filtereAdsSet = new Set(filteredAdsList)

        const filteredAdsArray = Array.from(filtereAdsSet)

        setFilteredAds([...filteredAdsArray])
    }

    const handleFilterTagDelete = (val: string) => {
        const filtersUsedObject = filtersUsed

        delete filtersUsedObject[Object.keys(filtersUsed).find(key => filtersUsed[key] === val)!]

        setFiltersUsed({ ...filtersUsedObject })

        if (Object.keys(filtersUsedObject).length > 0) {
            Object.keys(filtersUsedObject).forEach((key, index) => {
                updateFilteredAdsAfterTagRemoval(filtersUsedObject[key], key as keyof IAdInfo, index)
            })
        } else {
            setFilteredAds([])
        }
    }

    const filterAdsByValue = (min: string, max: string, key: keyof IAdInfo) => {
        if (min && max) {
            let filterAdsList: IAdInfo[] = []

            filteredAds.length > 0 ?
                filterAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) >= parseInt(min) && parseInt(ad[`${key}`] as string) <= parseInt(max))
                :
                filterAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) >= parseInt(min) && parseInt(ad[`${key}`] as string) <= parseInt(max))

            if (key === "mileage") {
                setFiltersUsed({ ...filtersUsed, [key]: `A partir de ${min} km até ${max} km` })
            } else if (key === 'price') {
                setFiltersUsed({ ...filtersUsed, [key]: `A partir de R$ ${min},00 até R$ ${max},00` })
            }

            setFilteredAds(filterAdsList)
        } else if (max == '') {
            let filterAdsList: IAdInfo[] = []

            filteredAds.length > 0 ?
                filterAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) >= parseInt(min))
                :
                filterAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) >= parseInt(min))

            if (key === "mileage") {
                setFiltersUsed({ ...filtersUsed, [key]: `A partir de ${min} km` })
            } else if (key === 'price') {
                setFiltersUsed({ ...filtersUsed, [key]: `A partir de ${currency(parseInt(min))}` })
            }

            setFilteredAds(filterAdsList)
        } else if (min == '') {
            let filterAdsList: IAdInfo[] = []

            filteredAds.length > 0 ?
                filterAdsList = filteredAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) <= parseInt(max))
                :
                filterAdsList = listAds.filter((ad: IAdInfo) => parseInt(ad[`${key}`] as string) <= parseInt(max))
            if (key === "mileage") {
                setFiltersUsed({ ...filtersUsed, [key]: `Até ${max} km` })
            } else if (key === 'price') {
                setFiltersUsed({ ...filtersUsed, [key]: `Até ${currency(parseInt(max))}` })
            }

            setFilteredAds(filterAdsList)
        }
    }

    const globalHomeValues: IHomeContext = {
        listAds: listAds,
        setListAd: setListAd,
        filteredAds: filteredAds,
        setFilteredAds: setFilteredAds,
        filterAdsByTag: filterAdsByTag,
        filtersUsed: filtersUsed,
        filterAdsByValue: filterAdsByValue,
        setFiltersUsed: setFiltersUsed,
        handleFilterTagDelete: handleFilterTagDelete
    }

    return (
        <HomeContext.Provider value={globalHomeValues}>
            {children}
        </HomeContext.Provider>
    )

}