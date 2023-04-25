export interface AddressResponse {
    id: string
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}

export interface AddressRequest extends Omit<AddressResponse, 'id'> {}