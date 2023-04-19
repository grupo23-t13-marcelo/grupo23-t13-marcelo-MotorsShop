import { createContext, useEffect, useState } from "react";
import { IAccessContextProps, IAccessContext, IAdInfo } from "./accessTypes";
import { ILogin } from "../../pages/loginPage/login";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react";
import { apiGetListAds } from "../../services/adsApi/adsApi";

export const AccessContext = createContext({} as IAccessContext)

export const AccessProvider = ({ children }: IAccessContextProps) => {
    const [modalstatus, setModalstatus] = useState<boolean>(false)
    const [listAds, setListAd] = useState<IAdInfo[]>([])
    const navigate = useNavigate()
    const toast = useToast()

    const apiPostLogin = (formData: ILogin) => {
        console.log(formData)
        api.post('login/', formData)
        .then((response) => {
            console.log(response)
            localStorage.setItem('motors.user', formData.email)
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
            console.log(error)
        })
    }

    useEffect(() => {
        
        const listAds = async () => {
            const {data} = await apiGetListAds()
            console.log(data)
            setListAd(data)
        }

        listAds()
    }, [])


    const globalAccessValues: IAccessContext = {
        modalstatus: modalstatus,
        setModalstatus: setModalstatus,
        apiPostLogin: apiPostLogin,
        listAds: listAds,
        setListAd: setListAd
    }


    return (
        <AccessContext.Provider value={globalAccessValues}>
            {children}
        </AccessContext.Provider>
    )
}