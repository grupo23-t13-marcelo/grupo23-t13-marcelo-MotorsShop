import { AxiosResponse } from "axios";
import { karsApi } from "../api";

export async function karsApiCars(): Promise<AxiosResponse<any>> {
    const brands = await karsApi.get('cars')

    return brands.data
}

export async function karsApiCarsByBrand(brand: string): Promise<AxiosResponse<any>> {
    const cars = await karsApi.get(`cars/?brand=${brand}`)

    return cars
}