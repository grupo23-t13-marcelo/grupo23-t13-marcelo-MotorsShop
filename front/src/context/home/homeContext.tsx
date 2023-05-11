import { createContext, useEffect, useState } from "react";
import { apiGetListAds, apiGetListAdsPaginated } from "../../services/adsApi/adsApi";
import { IAdInfo, IAdInfoPag } from "../access/accessTypes";
import { IHomeContext, IHomeContextProps } from "./homeTypes";
import { currency } from "../../pages/adsDetail/adsDetail";
import { string } from "yup";

export const HomeContext = createContext({} as IHomeContext)

export const HomeProvider = ({ children }: IHomeContextProps) => {

    const [listAds, setListAd] = useState<IAdInfo[]>([])
    const [filteredAds, setFilteredAds] = useState<IAdInfo[]>([])
    const [filtersUsed, setFiltersUsed] = useState<any>({})
    const [listAdsPag, setListAdsPag] = useState<IAdInfoPag | undefined>()
    const [showMoreBrand, setShowMoreBrand] = useState<string>("flex")
    const [showMore, setShowMore] = useState<string>("flex")
    const [showLessBrand, setShowLessBrand] = useState<string>("none")
    const [showLess, setShowLess] = useState<string>("none")
    const [query, setQuery] = useState<{ next: string } | { prev: string }>()
    const [filterLimit, setFilterLimit] = useState<number>(5)
    const [filterLimitBrand, setFilterLimitBrand] = useState<number>(5)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {

        const listAds = async () => {
            const { data } = await apiGetListAds()

            setListAd(data)
        }

        const listAdsPag = async () => {
            const { data } = await apiGetListAdsPaginated(query)

            setListAdsPag(data)
        }

        listAdsPag()
        listAds()

    }, [filtersUsed, setFiltersUsed, query])

    const filterAdsByTag = (param: string, tag: keyof IAdInfo) => {
        setShowLessBrand("none")
        setShowLess("none")
        setShowMoreBrand("flex")
        setShowMore("flex")
        setFilterLimitBrand(5)
        setFilterLimit(5)
        if (filteredAds.length > 0) {
            const filteredAdsList: IAdInfo[] = filteredAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]

            const filters = { ...filtersUsed, [tag]: param }

            setPage(1)

            setFiltersUsed(filters)

            setFilteredAds(filteredAdsList)
        } else {
            const filteredAdsList: IAdInfo[] = listAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]

            const filtereAdsSet = new Set([...filteredAdsList, ...filteredAds])

            const filteredAdsArray = Array.from(filtereAdsSet)

            const filters = { ...filtersUsed, [tag]: param }

            setPage(1)

            setFiltersUsed(filters)

            setFilteredAds(filteredAdsArray)
        }
    }

    const updateFilteredAdsAfterTagRemoval = (param: string, tag: keyof IAdInfo, iteration: number) => {
        setFilterLimitBrand(5)
        setFilterLimit(5)
        setShowLessBrand("none")
        setShowLess("none")
        setShowMoreBrand("flex")
        setShowMore("flex")
        let filteredAdsList: IAdInfo[] = []

        if (iteration === 0) {
            if (tag === 'mileage' || tag === 'price') {
                setPage(1)

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
                setPage(1)

                filteredAdsList = listAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]
            }
        } else {
            if (tag === 'mileage' || tag === 'price') {
                setPage(1)

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
                setPage(1)

                filteredAdsList = filteredAds.filter((ad: IAdInfo) => ad[`${tag}`] == param) as IAdInfo[]
            }
        }

        setPage(1)

        const filtereAdsSet = new Set(filteredAdsList)

        const filteredAdsArray = Array.from(filtereAdsSet)

        setFilteredAds([...filteredAdsArray])
    }

    const handleFilterTagDelete = (val: string) => {
        setFilterLimitBrand(5)
        setFilterLimit(5)
        setShowLessBrand("none")
        setShowLess("none")
        setShowMore("flex")
        setShowMoreBrand("flex")
        setPage(1)

        const filtersUsedObject = filtersUsed

        delete filtersUsedObject[Object.keys(filtersUsed).find(key => filtersUsed[key] === val)!]

        setFiltersUsed({ ...filtersUsedObject })

        if (Object.keys(filtersUsedObject).length > 0) {
            Object.keys(filtersUsedObject).forEach((key, index) => {
                updateFilteredAdsAfterTagRemoval(filtersUsedObject[key], key as keyof IAdInfo, index)
            })
        } else {
            setPage(1)
            setFilteredAds([])
        }
    }

    const filterAdsByValue = (min: string, max: string, key: keyof IAdInfo) => {
        setFilterLimitBrand(5)
        setFilterLimit(5)
        setShowLessBrand("none")
        setShowLess("none")
        setShowMore("flex")
        setShowMoreBrand("flex")

        if (min && max) {
            setPage(1)

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
            setPage(1)

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
            setPage(1)

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
        page: page,
        query: query,
        showMoreBrand: showMoreBrand,
        setShowMoreBrand: setShowMoreBrand,
        showMore: showMore,
        setShowMore: setShowMore,
        filterLimit: filterLimit,
        setFilterLimit: setFilterLimit,
        filterLimitBrand: filterLimitBrand,
        setFilterLimitBrand: setFilterLimitBrand,
        showLessBrand: showLessBrand,
        setShowLessBrand: setShowLessBrand,
        setPage: setPage,
        listAds: listAds,
        showLess: showLess,
        setShowLess: setShowLess,
        setQuery: setQuery,
        setListAd: setListAd,
        listAdsPag: listAdsPag,
        filteredAds: filteredAds,
        filtersUsed: filtersUsed,
        setFilteredAds: setFilteredAds,
        filterAdsByTag: filterAdsByTag,
        setFiltersUsed: setFiltersUsed,
        filterAdsByValue: filterAdsByValue,
        handleFilterTagDelete: handleFilterTagDelete
    }

    return (
        <HomeContext.Provider value={globalHomeValues}>
            {children}
        </HomeContext.Provider>
    )

}