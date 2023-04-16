import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entities"

const getUser = async () =>{
    const userRepo = AppDataSource.getRepository(User)

    const getUsers = userRepo.find({relations: {ads: true}})
}