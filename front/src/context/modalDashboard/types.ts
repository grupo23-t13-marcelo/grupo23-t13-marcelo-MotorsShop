import React from "react"

export interface ICarsInterface {
    id: string,
    name: string,
    brand: string,
    year: string,
    fuel: number,
    value: number
}

export interface IModalDashboarContext {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
    brands: string[],
    models: string[] | null,
    years: string[] | null,
    fipePrice: number,
    fuel: {},
    setFuel: React.Dispatch<React.SetStateAction<{}>>,
    setModels: React.Dispatch<React.SetStateAction<string[] | null>>
    setYears: React.Dispatch<React.SetStateAction<string[] | null>>,
    getUniqueBrands: () => void,
    getFipePrice: (model: string) => void,
    getModelsByBrand: (brand: string) => void
}

export interface IModalDashboarContextProps {
    children: React.ReactNode
}