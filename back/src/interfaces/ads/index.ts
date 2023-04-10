export interface ICreateAds {
    brand: string
    model: string
    year: string
    fuel: string
    mileage : number
    color: string
    fipe_table_price : string
    price: string
    description: string
    cover_image: string  
}

export interface IPatchAds{
    brand?: string
    model?: string
    year?: string
    fuel?: string
    mileage?: number
    color?: string
    fipe_table_price?: string
    price?: string
    description?: string
    cover_image?: string  
}


export interface IAds {
    id: string
    brand: string
    model: string
    year: string
    fuel: string
    mileage : number
    color: string
    fipe_table_price : string
    price: string
    description: string
    cover_image: string
    is_activated: boolean 
}

