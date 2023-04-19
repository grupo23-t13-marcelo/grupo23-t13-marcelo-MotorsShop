import { IAds } from "../ads"

export interface IGallery {
    id: string
    file_name: string
}

export interface IGalleryCreate {
    file_name: string
}

export interface IGalleryPatch {
    id?: string
    file_name?: string
}