import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom"
import { validationEditAddress } from "../../validations/address";
import InputMask from 'react-input-mask'
import { useContext, useState } from "react";
import { AccessContext } from "../../context/access/accessContext";

export interface IEditAddress {
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
}

const ModalEditAddress = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user, apiPutAddress} = useContext(AccessContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IEditAddress>({
        resolver: yupResolver(validationEditAddress)
    });

    const [valueCep, setValueCep] = useState(user?.address.cep)
    const [valueEstado, setValueEstado] = useState(user?.address.state)
    const [valueCidade, setValueCidade] = useState(user?.address.city)
    const [valueRua, setValueRua] = useState(user?.address.street)
    const [valueNumero, setValueNumero] = useState(user?.address.number)
    const [valueComplement, setValueComplement] = useState(user?.address.complement)



    const onSubmit = (formData:IEditAddress) => {
        apiPutAddress(formData)
        window.location.reload()
    }


    return (
        <>
            <Text onClick={onOpen}>Editar Endereço</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                    <Text fontWeight={600} fontSize={18}>Editar endereço</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                        <FormControl mb={"20px"} isInvalid={errors.cep ? true : false} isRequired={errors.cep ? true : false}>
                            <FormLabel>CEP</FormLabel>
                            <Input as={InputMask} mask="99999-999" defaultValue={user?.address.cep} value={valueCep}   type="text" id="cep" placeholder="Ex: 89888.888" {...register("cep")} onChange={(e) => setValueCep(e.target.value)} />
                            <FormErrorMessage>
                                {errors.cep && `${errors.cep.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex gap={3}>
                            <FormControl mb={"20px"} isInvalid={errors.state ? true : false} isRequired={errors.state ? true : false}>
                            <FormLabel>Estado</FormLabel>
                            <Input defaultValue={user?.address.state} value={valueEstado}   type="text" id="state" placeholder="Ex: Paraná" {...register("state")} onChange={(e) => setValueEstado(e.target.value)} />
                            <FormErrorMessage>
                                {errors.state && `${errors.state.message}`}
                            </FormErrorMessage>
                            </FormControl>
                            <FormControl mb={"20px"} isInvalid={errors.city ? true : false} isRequired={errors.city ? true : false}>
                            <FormLabel>Cidade</FormLabel>
                            <Input defaultValue={user?.address.city} value={valueCidade}   type="text" id="city" placeholder="Ex: Curitiba" {...register("city")} onChange={(e) => setValueCidade(e.target.value)} />
                            <FormErrorMessage>
                                {errors.city && `${errors.city.message}`}
                            </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        <FormControl mb={"20px"} isInvalid={errors.street ? true : false} isRequired={errors.street ? true : false}>
                            <FormLabel>Rua</FormLabel>
                            <Input defaultValue={user?.address.street} value={valueRua}  type="text" id="cep" placeholder="Ex: Rua do paraná" {...register("street")} onChange={(e) => setValueRua(e.target.value)} />
                            <FormErrorMessage>
                                {errors.street && `${errors.street.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex gap={3}>
                            <FormControl mb={"20px"} isInvalid={errors.number ? true : false} isRequired={errors.number ? true : false}>
                            <FormLabel>Número</FormLabel>
                            <Input defaultValue={user?.address.number} value={valueNumero}   type="text" id="number" placeholder="Ex: 1029" {...register("number")} onChange={(e) => setValueNumero(e.target.value)} />
                            <FormErrorMessage>
                                {errors.state && `${errors.state.message}`}
                            </FormErrorMessage>
                            </FormControl>
                            <FormControl mb={"20px"} isInvalid={errors.complement ? true : false} isRequired={errors.complement ? true : false}>
                            <FormLabel>Complemento</FormLabel>
                            <Input defaultValue={user?.address?.complement} value={valueComplement}  type="text" id="complement" placeholder="Ex: Apart 12" {...register('complement')} onChange={(e) => setValueComplement(e.target.value)} />
                            <FormErrorMessage>
                                {errors.complement && `${errors.complement.message}`}
                            </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        </ModalBody>
                        <ModalFooter gap={5}>
                            <Button h={'12'} w={'80%'} borderRadius={'base'} fontWeight={'medium'} onClick={onClose}  variant={"gray-1"}>Cancelar</Button>
                        
                            <Button h={'12'} w={'100%'} borderRadius={'base'} fontWeight={'medium'} fontSize={14}  variant={"button-sender"}  type="submit">Salvar alterações</Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ModalEditAddress