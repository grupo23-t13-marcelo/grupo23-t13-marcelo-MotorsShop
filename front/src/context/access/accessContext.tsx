import { createContext, useContext, useEffect, useState } from "react";
import { IAccessContextProps, IAccessContext, IAdInfo, IUserRegister, IUser } from "./accessTypes";
import { ILogin } from "../../pages/loginPage/login";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react";
import { AdDetailContext } from "../adsDetail/adsDetailContext";
import { IAdDetail } from "../adsDetail/adsTypes";
import { IEditUser } from "../../components/ModalEditUser";
import { IEditAddress } from "../../components/ModalEditAddress";
import { handleLogout } from "../../components/commons/Header/Header";

export const AccessContext = createContext({} as IAccessContext)

export const AccessProvider = ({ children }: IAccessContextProps) => {
    const [modalstatus, setModalstatus] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null)
    const [userRender, setUserRender] = useState<IUser | null>(null)
    const { adToShow} = useContext(AdDetailContext)
    const token = localStorage.getItem('motors.token')
    const userLocal = JSON.parse(localStorage.getItem('motors.user')!)
    
    const navigate = useNavigate()
    const toast = useToast()

    const apiPostLogin = async (formData: ILogin) => {
        try {
            const {data} = await api.post('login/', formData)
            localStorage.setItem('motors.token', data.token)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Login Realizado com Sucesso
            </Box>)})
            setIsLoading(false)
            navigate('/')
        } catch (error) {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                    Algo Deu Errado, Por Favor Tente Novamente.
            </Box>)})
            
        }
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
            
        }
    }

    const apiPutEdit = async (dataPut: IEditUser, userId: string | null) => {
        
        try {
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.put(`users/${userId}`, dataPut)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Login Realizado com Sucesso
            </Box>)})
        } catch (error) {
            console.log(error)
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                Algo De Errado Ocorreu...
            </Box>)})
        }
    }

    const apiDeleteProfile = async (userId: string | null) => {
        try {
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.delete(`users/${userId}`)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Conta Deletada!
            </Box>)})
            handleLogout()
        } catch (error) {
            console.log(error)
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                Algo de errado ocorreu!
            </Box>)})
        }
    }

    const apiPutAddress = async (dataPut: IEditAddress) => {
        try {
            api.defaults.headers.authorization = `Bearer ${token}`
            await api.put(`address/`, dataPut)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Endereço Editado com Sucesso!
            </Box>)})
        } catch (error) {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                Algo deu Errado...
            </Box>)})
        }
    }

    const apiGetProfile = async () => {
           
            api.defaults.headers.authorization = `Bearer ${token}`
            const {data} = await api.get('users/profile')
            try {
                localStorage.setItem('motors.user', JSON.stringify(data)) 
                setUser(data)
                // console.log(data)
                
            } catch (error) {
                console.log(error)
            }
    }

    const apiGetUser = async (userId: string) => {
        
        try { 
            const {data} = await api.get(`users/${userId}`)
            localStorage.setItem('userRender', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
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
        apiGetUser: apiGetUser,
        apiPutEdit: apiPutEdit,
        apiDeleteProfile: apiDeleteProfile,
        apiPutAddress: apiPutAddress,
        setIsLoading: setIsLoading,
        isLoading: isLoading,
        user: user,
        setUser: setUser,
        setUserRender: setUserRender,
        userRender: userRender
    }


    return (
        <AccessContext.Provider value={globalAccessValues}>
            {children}
        </AccessContext.Provider>
    )
}
