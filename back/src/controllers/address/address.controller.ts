import { Request, Response } from "express"
import { AddressRequest } from "../../interfaces/address"
import updateAddressService from "../../services/Address/updateAddress.service"

const updateAddressController = async (req:Request, res: Response) => {
    const userID:string = req.user.id
    const updateData: AddressRequest = req.body
    const updateAddress = await updateAddressService(updateData, userID)
    return res.status(200).json(updateAddress)  
}

export {updateAddressController}