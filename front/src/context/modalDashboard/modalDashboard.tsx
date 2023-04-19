import { createContext, useEffect, useState } from "react";
import { karsApiCars, karsApiCarsByBrand } from "../../services/karsApi/carsBrand";
import axios from "axios";
import { ICarsInterface, IModalDashboarContext, IModalDashboarContextProps } from "./types";

export const ModalDashboardContext = createContext({} as IModalDashboarContext)

export const ModalDashboardProvider = ({ children }: IModalDashboarContextProps) => {
    const [brands, setBrands] = useState<string[]>([''])
    const [models, setModels] = useState<string[] | null>(null)
    const [years, setYears] = useState<string[] | null>(null)
    const [fipePrice, setFipePrice] = useState<number>(0)
    const [cars, setCars] = useState<ICarsInterface[] | undefined>()
    const [fuel, setFuel] = useState<{}>({ start: '' })

    async function getUniqueBrands() {
        try {
            const cars = await karsApiCars()

            const brands = Object.keys(cars)

            setBrands(brands)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            } else {
                console.log(error)
            }
        }
    }

    async function getModelsByBrand(brand: string) {
        try {
            const uniqueModels: string[] = await karsApiCarsByBrand(brand).then(res => {
                const data: ICarsInterface[] = res.data

                const carsSet: Set<ICarsInterface> = new Set()

                const carsModels: string[] = Array.from(new Set(data.map((car: ICarsInterface) => {
                    carsSet.add(car)
                    return car.name
                })))

                const carsYears: string[] = Array.from(new Set(data.map((car: ICarsInterface) => car.year)))

                const carsArray = Array.from(carsSet)

                setCars(carsArray)

                setYears(carsYears.sort())

                return carsModels.sort()
            })

            setModels(uniqueModels)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            } else {
                console.log(error)
            }
        }
    }

    async function getFipePrice(model: string) {
        if (model == 'Selecione um modelo') {
            setFipePrice(0)
            return
        }

        const car: ICarsInterface = cars!.find(({ name }) => name == model)!

        if (car.fuel == 1) {
            setFuel({ flex: 'Flex' })
        } else if (car.fuel == 2) {
            setFuel({ hibrid: 'Híbrido' })
        } else if (car.fuel == 3) {
            setFuel({ eletric: 'Elétrico' })
        }

        setFipePrice(car.value)

    }

    const globalValues: IModalDashboarContext = {
        brands: brands,
        models: models,
        years: years,
        fuel: fuel,
        fipePrice: fipePrice,
        setFuel: setFuel,
        setYears: setYears,
        setModels: setModels,
        getUniqueBrands: getUniqueBrands,
        getModelsByBrand: getModelsByBrand,
        getFipePrice: getFipePrice
    }

    return (
        <ModalDashboardContext.Provider value={globalValues}>
            {children}
        </ModalDashboardContext.Provider>
    )
}