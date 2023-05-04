import { Input, Text, Textarea, SimpleGrid, Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, useDisclosure, Select, Button, ModalOverlay, FormControl, FormLabel, Flex, Box, useToast } from "@chakra-ui/react"
import React, { ChangeEvent, useContext, useEffect, useState } from "react"
import { ModalDashboardContext } from "../../context/modalDashboard/modalDashboard"
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adSchema } from "./types";
import { currency } from "../adsDetail/adsDetail";
import { apiPostNewAd } from "../../services/adsDetail/retrieveAdById";
import { AccessContext } from "../../context/access/accessContext";

interface INewAd {
    user: string
    brand: string
    model: string
    year: string
    fuel: string
    mileage: number
    color: string
    fipe_table_price: string
    price: string
    description: string
    cover_image: string
    gallery: IGallery[]
}

interface IGallery {
    file_name: string
}

export const ModalDashboardAddAd = () => {
    const { brands, models, years, fipePrice, fuel, setFuel, getModelsByBrand, getUniqueBrands, getFipePrice, isOpen, onClose, onOpen } = useContext(ModalDashboardContext)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [inputFields, setInputFields] = useState([{ input: '' }, { input: '' }])
    const [userID, setUserId] = useState<string>('')
    const toast = useToast()
    const { apiGetProfile } = useContext(AccessContext)

    const handleNewFields = () => {
        const inputs = [...inputFields]

        inputs.push({ input: '' })

        setInputFields(inputs)
    }

    const handlePlaceholderSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target

        const value = target.options[target.selectedIndex].value

        value == 'placeholder' ? (setIsDisabled(true), getFipePrice('Selecione um modelo'), setFuel({ start: '' })) : (setIsDisabled(false))
    }

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target

        const value = target.options[target.selectedIndex].innerText

        value == 'Selecione um modelo' && setFuel({ start: '' })

        getFipePrice(value)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<INewAd>({
        resolver: yupResolver(adSchema), defaultValues: {
            gallery: [{ file_name: '' }]
        }
    });

    const {
        fields
    } = useFieldArray({
        name: "gallery",
        control
    })

    const showToast = (message: string, color: string) => {
        return (toast({
            position: "bottom-right",
            render: () => {
                return (
                    <Box color={"black"} p={6} bg={color} borderRadius={10} fontSize={15}>
                        {message}
                    </Box>
                )
            }
        }))
    }

    const onSubmit = async (data: INewAd) => {
        data.fipe_table_price = fipePrice.toString()
        data.fuel = Object.keys(fuel)[0]
        data.user = userID

        apiPostNewAd(data, localStorage.getItem('motors.token')!)
            .then((resp) => {
                apiGetProfile()
                onClose()
            })
            .catch(function (error) {
                showToast(error.response.data.message, "red.500")
            })
    }

    const onError = (errors: any, e: any) => console.log(errors, e)

    useEffect(() => {
        const jwtToken = localStorage.getItem('motors.token')!;
        if (jwtToken) {
            const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]) as string);
            setUserId(decodedToken.id)
            getUniqueBrands()
        }

    }, [])

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontWeight={600} fontSize={18}>Criar anúncio</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
                            <FormControl mb={5}>
                                <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                    Marca
                                </FormLabel>
                                <Select id="brand" {...register('brand')} onChange={(e) => {
                                    handlePlaceholderSelection(e)
                                    getModelsByBrand(e.currentTarget.value)
                                }} >
                                    <option value="placeholder">
                                        Selecione uma marca
                                    </option>
                                    {
                                        brands.map((brand) => {
                                            return <option>{brand}</option>
                                        })
                                    }
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                    Modelo
                                </FormLabel>
                                <Select id="model" {...register('model')} isDisabled={isDisabled} onChange={handleModelChange}>
                                    <option value="placeholder">
                                        Selecione um modelo
                                    </option>
                                    {
                                        models &&
                                        models.map((model) => {
                                            return <option>{model}</option>
                                        })
                                    }
                                </Select>
                            </FormControl>

                            <SimpleGrid columns={2} spacing={5} mt={5}>
                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'} >
                                        Ano
                                    </FormLabel>
                                    <Select id="year" {...register('year')} isDisabled={isDisabled}>
                                        <option value="placeholder">
                                            Selecione um ano
                                        </option>
                                        {
                                            years &&
                                            years.map((year) => {
                                                return <option>{year}</option>
                                            })
                                        }
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                        Combustivel
                                    </FormLabel>
                                    <Input value={Object.values(fuel)[0] as string} isDisabled={true} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                        Quilometragem
                                    </FormLabel>
                                    <Input isDisabled={isDisabled} {...register('mileage')} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                        Cor
                                    </FormLabel>
                                    <Input isDisabled={isDisabled} {...register('color')} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                        Preço tabela FIPE
                                    </FormLabel>
                                    <Input isDisabled={true} value={currency(fipePrice)} placeholder="" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                        Preço
                                    </FormLabel>
                                    <Input isDisabled={isDisabled} {...register('price')} />
                                </FormControl>
                            </SimpleGrid>

                            <FormControl mb={5}>
                                <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'}>
                                    Descrição
                                </FormLabel>
                                <Textarea isDisabled={isDisabled} resize={"none"} h={'100px'} {...register('description')} />
                            </FormControl>

                            <FormControl mb={5}>
                                <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'} >
                                    Imagem de capa
                                </FormLabel>
                                <Input placeholder="https://image.com" {...register('cover_image')} />
                            </FormControl>

                            {
                                inputFields.map((input, index) => (
                                    <FormControl mb={5}>
                                        <FormLabel fontWeight={'600'} fontSize={'14px'} color={'gray.800'} key={index}>
                                            {index + 1}° Imagem da galeria
                                        </FormLabel>
                                        <Input placeholder="https://image.com" {...register(`gallery.${index}.file_name`)} />
                                    </FormControl>
                                ))
                            }
                            <Button isDisabled={inputFields.length == 6} backgroundColor={'brand4'} color={'brand2'} h={'25px'} p={4} fontSize={11} borderRadius={2} onClick={handleNewFields}>
                                Adicionar campo para imagem da galeria
                            </Button>
                            <Flex mt={5} justifyContent={"flex-end"} w={'100%'} gap={2}>
                                <Button borderRadius={3} backgroundColor={"gray.300"} fontSize={'12px'} color={"gray.700"} pl={7} pr={7} onClick={onClose}>Cancelar</Button>
                                <Button type="submit" borderRadius={3} backgroundColor={"brand3"} fontWeight={'light'} fontSize={'12px'} color={"brand4"} pl={10} pr={10} _hover={{ bg: 'brand2' }}>Criar anúncio</Button>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
