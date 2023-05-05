import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalContent, ModalOverlay, Select, Stack, Text, Textarea, Toast } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext"
import { validationEditAd } from "../../validations/user"
import { apiPatchAds } from "../../services/adsApi/adsApi"
import { ModalDashboardContext } from "../../context/modalDashboard/modalDashboard"
import { currency } from "../../pages/adsDetail/adsDetail"
import { api } from "../../services/api"
import { AccessContext } from "../../context/access/accessContext"
  

const ModalEditAd = () => {

    const {modalEditAd, setModalEditAd, editAd, setModalDeleteAd} = useContext(AdDetailContext)
    const { brands, models, years, fipePrice, fuel, setFuel, setFipePrice, getModelsByBrand, getUniqueBrands, getFipePrice, isOpen, onClose, onOpen, editModelChange, editIsDisabled, setEditIsDisabled, editPlaceholderSelection, setEditChanged, editChanged } = useContext(ModalDashboardContext)
    const {setUser} = useContext(AccessContext)
    const [inputsGallery, setInputsGallery] = useState<number>(0)
    const [publishedButton, setPublishedButton] = useState<string>("")
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationEditAd),
        defaultValues: {
            brand: editAd?.brand!,
            model: editAd?.model!,
            year: editAd?.year!,
            fuel: editAd?.fuel!,
            mileage: editAd?.mileage!,
            color: editAd?.color!,
            fipe_table_price: editAd?.fipe_table_price!,
            price: editAd?.price!,
            description: editAd?.description!,
            cover_image: editAd?.cover_image!,
            gallery_first_image: editAd?.gallery[0]?.file_name,
            gallery_second_image: editAd?.gallery[1]?.file_name,
            gallery_third_image: editAd?.gallery[2]?.file_name,
            gallery_fourth_image: editAd?.gallery[3]?.file_name,
            gallery_fifth_image: editAd?.gallery[4]?.file_name,
            gallery_sixth_image: editAd?.gallery[5]?.file_name
        }
    });


    const addInput =  () => {
        if (inputsGallery == 0) {
            setInputsGallery(editAd?.gallery?.length! + 1)
        }else {
            setInputsGallery(inputsGallery + 1)
        }
    }

    const UpdateEditAd = async (values: any, id: string) => {

        try{
            await apiPatchAds(values, id)
            const {data} = await api.get('users/profile')
            setUser(data)
            setModalEditAd(false)
            reset()
            setFuel({start: ''}) 
            setFipePrice(0) 
            setInputsGallery(0)
            setPublishedButton("")
        } catch (error) {
            console.error(error)
        }

    }

    const onSubmit = async (data: any) => {
        data.fuel = Object.keys(fuel)[0] === "start" ? editAd?.fuel! : Object.keys(fuel)[0];
        data.fipe_table_price = currency(fipePrice) === "R$ 0,00" ? editAd?.fipe_table_price! : fipePrice;

        const galleryImages = {
            ...(data.gallery_first_image && { gallery_first_image: data.gallery_first_image }),
            ...(data.gallery_second_image && { gallery_second_image: data.gallery_second_image }),
            ...(data.gallery_third_image && { gallery_third_image: data.gallery_third_image }),
            ...(data.gallery_fourth_image && { gallery_fourth_image: data.gallery_fourth_image }),
            ...(data.gallery_fifth_image && { gallery_fifth_image: data.gallery_fifth_image }),
            ...(data.gallery_sixth_image && { gallery_sixth_image: data.gallery_sixth_image }),
        };

        const galleryFiles = Object.entries(galleryImages)
            .filter(([, value]) => value !== "")
            .map(([key, value]) => ({ file_name: value }));

        const otherData = Object.keys(data)
            .filter(
            (key) =>
                key !== "gallery_first_image" &&
                key !== "gallery_second_image" &&
                key !== "gallery_third_image" &&
                key !== "gallery_fourth_image" &&
                key !== "gallery_fifth_image" &&
                key !== "gallery_sixth_image" &&
                data[key] !== ""
            )
            .reduce((obj: any, key: string) => {
            obj[key] = data[key];
            return obj;
        }, {});

        
        const newData = {
            ...otherData,
            gallery: [
                ...galleryFiles
            ]
        }

        if (publishedButton !== ""){
            newData.is_activated = publishedButton === "Sim" ? true : false
        } else {
            newData.is_activated = editAd.is_activated
        }

        UpdateEditAd(newData, editAd.id)

    }

    return (
        <Modal isOpen={modalEditAd} onClose={() => setModalEditAd(false)}>
            <ModalOverlay>
                <ModalContent p={"10px 20px"} ml={"10px"} mr={"8px"} maxW={"500px"}>
                    <Flex w={"100%"} justify={"space-between"} align={"center"} mt={"8px"}>
                        <Heading fontSize={"1xl"}>Editar anúncio</Heading>
                        <Text onClick={() => (setModalEditAd(false), reset(), setFuel({start: ''}), setFipePrice(0), setInputsGallery(0), setPublishedButton(""))} cursor={"pointer"} _hover={{ color: "gray.500" }}>X</Text>
                    </Flex>
                    <Text m={"20px 0"} fontSize={"1xl"}>Infomações do veículo</Text>
                    <Stack>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl mb={"20px"} isInvalid={errors.brand ? true : false} isRequired={errors.brand ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>Marca</FormLabel>
                                <Select id="brandEditAd" cursor={"pointer"} defaultValue={editAd?.brand!} {...register("brand")} onChange={(e) => {
                                    editPlaceholderSelection(e)
                                    getModelsByBrand(e.currentTarget.value)
                                }}>
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
                            <FormControl mb={"20px"} isInvalid={errors.model ? true : false} isRequired={errors.model ? true : false}>
                                <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Modelo</FormLabel>
                                <Select id="modelEditAd" {...register('model')}  isDisabled={editIsDisabled} onChange={editModelChange}>
                                    <option value={editChanged ? "placeholder" : editAd?.model!}>
                                        {editChanged ? "Selecione um modelo" : editAd?.model!}
                                    </option>
                                    {
                                        editChanged ?
                                        (
                                            models &&
                                            models.map((model) => {
                                                return <option>{model}</option>
                                            })
                                        ) : 
                                        (
                                            
                                            models &&
                                            models.map((model) => {
                                                return model === editAd?.model! ? null : <option>{model}</option>;
                                            })
                                            
                                        )
                                    }
                                </Select>
                            </FormControl>
                            <Flex w={"100%"} justify={"space-between"}>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.year ? true : false} isRequired={errors.year ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Ano</FormLabel>
                                    <Select id="year" {...register('year')} isDisabled={editIsDisabled}>
                                        <option value={editChanged ? "placeholder" : editAd?.year!}>
                                            {editChanged ? "Selecione um ano" : editAd?.year!}
                                        </option>
                                        {
                                        editChanged ?
                                        (
                                            years &&
                                            years.map((year) => {
                                                return <option>{year}</option>
                                            })
                                        ) : 
                                        (
                                            
                                            years &&
                                            years.map((years) => {
                                                return years === editAd?.year! ? null : <option>{years}</option>;
                                            })
                                            
                                        )
                                    }
                                    </Select>
                                </FormControl>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.fuel ? true : false} isRequired={errors.fuel ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Combustível</FormLabel>
                                    <Input value={Object.keys(fuel)[0] === "start" ? editAd?.fuel! : Object.keys(fuel)[0]} type="text" id="fuelEditAd" placeholder="Digitar tipo de Combustível" isDisabled={true} {...register("fuel")}/>
                                    <FormErrorMessage>
                                        {errors.fuel && `${errors.fuel.message}`}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex w={"100%"} justify={"space-between"}>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.mileage ? true : false} isRequired={errors.mileage ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Quilometragem</FormLabel>
                                    <Input defaultValue={editAd?.mileage!} type="text" id="MileageEditAd" placeholder="Digitar Quilometragem" {...register("mileage")}/>
                                    <FormErrorMessage>
                                        {errors.mileage && `${errors.mileage.message}`}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.color ? true : false} isRequired={errors.color ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Cor</FormLabel>
                                    <Input defaultValue={editAd?.color!} type="text" id="colorEditAd" placeholder="Digitar Cor" {...register("color")}/>
                                    <FormErrorMessage>
                                        {errors.color && `${errors.color.message}`}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex w={"100%"} justify={"space-between"}>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.fipe_table_price ? true : false} isRequired={errors.fipe_table_price ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"12px"}>Preço tabela FIPE</FormLabel>
                                    <Input value={currency(fipePrice) === "R$ 0,00" ? currency(editAd?.fipe_table_price!) : currency(fipePrice)} type="text" id="fipeEditAd" placeholder="Digite aqui" isDisabled={true} {...register("fipe_table_price")}/>
                                    <FormErrorMessage>
                                        {errors.fipe_table_price && `${errors.fipe_table_price.message}`}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl w={"48%"} mb={"20px"} isInvalid={errors.price ? true : false} isRequired={errors.price ? true : false}>
                                    <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Preço</FormLabel>
                                    <Input defaultValue={editAd?.price!} type="text" id="priceEditAd" placeholder="Digitar Cor" {...register("price")}/>
                                    <FormErrorMessage>
                                        {errors.price && `${errors.price.message}`}
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <FormControl mb={"20px"} isInvalid={errors.description ? true : false} isRequired={errors.description ? true : false}>
                                <FormLabel  fontWeight={"bold"} fontSize={"14px"}>Descrição</FormLabel>
                                <Textarea defaultValue={editAd?.description!} id="descriptionEditAd"  placeholder="Digite aqui" {...register("description")}/>
                                <FormErrorMessage>
                                    {errors.description && `${errors.description.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <Text fontWeight={"bold"} fontSize={"14px"} mb={"12px"} mt={"28px"}>Publicado</Text>
                            <Flex w={"100%"} justify={"space-between"} mb={"20px"}>
                                <Button w={"47%"} borderRadius={"4px"} onClick={() => setPublishedButton("Sim")} variant={publishedButton == "" ? (editAd?.is_activated ? "button-sender" : "outline-1") : (publishedButton == "Sim" ? "button-sender" : "outline-1")}>Sim</Button>
                                <Button w={"47%"} borderRadius={"4px"} onClick={() => setPublishedButton("Não")} variant={publishedButton == "" ? (!editAd?.is_activated ? "button-sender" : "outline-1") : (publishedButton == "Não" ? "button-sender" : "outline-1")}>Não</Button>
                            </Flex>
                            <FormControl mb={"20px"} isInvalid={errors.cover_image ? true : false} isRequired={errors.cover_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>Imagem de capa</FormLabel>
                                <Input defaultValue={editAd?.cover_image!} type="text" id="coverImageEditAd"  placeholder="Digite aqui" {...register("cover_image")}/>
                                <FormErrorMessage>
                                    {errors.cover_image && `${errors.cover_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 1 ? "block" : "none" ): (inputsGallery >= 1 ? "block" : "none")} mb={"20px"} isInvalid={errors.gallery_first_image ? true : false} isRequired={errors.gallery_first_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>1° Imagem da galeria</FormLabel>
                                <Input value={editAd?.gallery[0]?.file_name} type="text" id="galeryFirstEditAd"  placeholder="Digite aqui" {...register("gallery_first_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_first_image && `${errors.gallery_first_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 2 ? "block" : "none" ): (inputsGallery >= 2 ? "block" : "none")}  mb={"20px"} isInvalid={errors.gallery_second_image ? true : false} isRequired={errors.gallery_second_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>2° Imagem da galeria</FormLabel>
                                <Input defaultValue={editAd?.gallery[1]?.file_name} type="text" id="galerySecondEditAd"  placeholder="Digite aqui" {...register("gallery_second_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_second_image && `${errors.gallery_second_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 3 ? "block" : "none" ): (inputsGallery >= 3 ? "block" : "none")}  mb={"20px"} isInvalid={errors.gallery_third_image ? true : false} isRequired={errors.gallery_third_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>3° Imagem da galeria</FormLabel>
                                <Input defaultValue={editAd?.gallery[2]?.file_name} type="text" id="galeryThirdEditAd"  placeholder="Digite aqui" {...register("gallery_third_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_third_image && `${errors.gallery_third_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 4 ? "block" : "none" ): (inputsGallery >= 4 ? "block" : "none")}  mb={"20px"} isInvalid={errors.gallery_fourth_image ? true : false} isRequired={errors.gallery_fourth_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>4° Imagem da galeria</FormLabel>
                                <Input defaultValue={editAd?.gallery[3]?.file_name} type="text" id="galeryFourthEditAd"  placeholder="Digite aqui" {...register("gallery_fourth_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_fourth_image && `${errors.gallery_fourth_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 5 ? "block" : "none" ): (inputsGallery >= 5 ? "block" : "none")}  mb={"20px"} isInvalid={errors.gallery_fifth_image ? true : false} isRequired={errors.gallery_fifth_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>5° Imagem da galeria</FormLabel>
                                <Input defaultValue={editAd?.gallery[4]?.file_name} type="text" id="galeryFifthEditAd"  placeholder="Digite aqui" {...register("gallery_fifth_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_fifth_image && `${errors.gallery_fifth_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl display={inputsGallery == 0 ? (editAd?.gallery?.length! >= 6 ? "block" : "none" ): (inputsGallery >= 6 ? "block" : "none")} mb={"20px"} isInvalid={errors.gallery_sixth_image ? true : false} isRequired={errors.gallery_sixth_image ? true : false}>
                                <FormLabel fontWeight={"bold"} fontSize={"14px"}>6° Imagem da galeria</FormLabel>
                                <Input defaultValue={editAd?.gallery[5]?.file_name} type="text" id="galerySixthEditAd"  placeholder="Digite aqui" {...register("gallery_sixth_image")}/>
                                <FormErrorMessage>
                                    {errors.gallery_sixth_image && `${errors.gallery_sixth_image.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <Button display={inputsGallery >= 6 ? "none" : "block"} type="button" h={"32px"} fontSize={"12px"} w={{base: "100%", md: "60%"}} bg={"brand4"} color={"brand1"} onClick={() => addInput()}>Adicionar campo para imagem da galeria</Button>
                            <Flex justify={"space-between"} mt={"30px"}>
                                <Button type="button" variant={"outline-1"} fontSize={"14px"} w={"47%"} borderRadius={"5px"} onClick={() => (setModalDeleteAd(true), setModalEditAd(false), reset(), setFuel({start: ''}), setFipePrice(0), setInputsGallery(0), setPublishedButton(""))}>Excluir</Button>
                                <Button type="submit" variant={"button-sender"} fontSize={"14px"} w={"47%"} borderRadius={"5px"}>Salvar</Button>
                            </Flex>
                        </form>
                    </Stack>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )

}

export default ModalEditAd