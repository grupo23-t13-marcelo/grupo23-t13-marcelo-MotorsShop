import { createContext, useEffect, useState } from "react";
import { IAccessContextProps, IAccessContext, IAdInfo, IUserRegister, IUser } from "./accessTypes";
import { ILogin } from "../../pages/loginPage/login";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react";

export const AccessContext = createContext({} as IAccessContext)

export const AccessProvider = ({ children }: IAccessContextProps) => {
    const [modalstatus, setModalstatus] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null)
    const token = localStorage.getItem('motors.token')
    const navigate = useNavigate()
    const toast = useToast()

    const apiPostLogin = async (formData: ILogin) => {
       await api.post('login/', formData)
        .then((response) => {
            localStorage.setItem('motors.token', response.data.token)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Login Realizado com Sucesso
            </Box>)})
            navigate('/')
        }).catch((error) => {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    {error.response.data.message}
            </Box>)})
            
        })
    }

    const apiPostRegister = async (dataRegister: IUserRegister) => {

        try {
            await api.post("users/", dataRegister)
            setIsLoading(false)
            setModalstatus(true)

        } catch (error){
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                 <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Ops, algo deu errado
            </Box>)})
            setIsLoading(false)
            console.log(error)
        }
    }

    const apiGetProfile = async () => {
           
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.get('users/profile')
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if(token){
            apiGetProfile()
        }
    }, [token])


    const globalAccessValues: IAccessContext = {
        modalstatus: modalstatus,
        setModalstatus: setModalstatus,
        apiPostLogin: apiPostLogin,
        apiPostRegister: apiPostRegister,
        apiGetProfile: apiGetProfile,
        setIsLoading: setIsLoading,
        isLoading: isLoading,
        user: user
    }


    return (
        <AccessContext.Provider value={globalAccessValues}>
            {children}
        </AccessContext.Provider>
    )
}