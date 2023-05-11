import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entities";
import { User } from "../../entities/users.entities";
import { AddressRequest, AddressResponse } from "../../interfaces/address";

export const updateAddressService = async (data: AddressRequest, userID: string): Promise<AddressResponse>  => {
    const userRepo = AppDataSource.getRepository(User);
    const addressRepo = AppDataSource.getRepository(Address);

    const user = await userRepo.findOne({
        where: {
            id: userID
        }, 
        relations: {
            address: true
        }
    })

    await addressRepo.update(user?.address.id!, {...data})

    const address = await addressRepo.findOneBy({id: user?.address.id!})

    return address!
}

export default updateAddressService