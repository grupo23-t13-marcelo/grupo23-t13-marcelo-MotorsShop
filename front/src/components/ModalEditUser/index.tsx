import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask'
import { validationUserEdit } from "../../validations/user";
import { useContext, useState } from "react";
import { AccessContext } from "../../context/access/accessContext";
import ModalDeleteUser from "./modalDeleteUser";



export interface IEditUser {
    name: string
    email: string
    cpf: string
    cellPhone: string
    birthdate: string
    description: string

}


const ModalEditUser = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user} = useContext(AccessContext)
    const userTest = {
        name: 'louco',
        email: 'neeko@gmail.com',
        cpf: '202.568.007-40',
        celular: '(21)98015-0228',
        description: 'kkkk',
        senha: 'Joao@123'
    }
    const [valueName, setValueName] = useState(user?.name)
    const [valueEmail, setValueEmail] = useState(user?.email)
    const [valueCpf, setValueCpf] = useState(user?.cpf)
    const [valueCell, setValueCell] = useState(user?.cell_phone)
    const [valueDescrip, setValueDescrip] = useState(user?.description)
    const [valueBirthDate, setValueBirthDate] = useState(user?.birthdate)



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IEditUser>({
        resolver: yupResolver(validationUserEdit),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            cpf: user?.cpf,
            cellPhone: user?.cell_phone,
            description: user?.description,
            birthdate: user?.birthdate
        }
    });
    const onSubmit = (formData: IEditUser) => {
        console.log(formData)
    }

    
    return (
        <>
            <Button onClick={onOpen}>Editar Usuário</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent >
                <ModalHeader>
                        <Text fontWeight={600} fontSize={18}>Editar perfil</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <FormControl mb={"20px"} isInvalid={errors.name ? true : false} isRequired={errors.name ? true : false}>
                            <FormLabel>Nome</FormLabel>
                            <Input value={valueName} type="text" id="nameRegister" placeholder="Ex: Samuel Leão" {...register("name")} onChange={(e) => setValueName(e.target.value) }/>
                            <FormErrorMessage>
                                {errors.name && `${errors.name.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.email ? true : false} isRequired={errors.email ? true : false}>
                            <FormLabel>Email</FormLabel>
                            <Input value={valueEmail} type="text" id="email" placeholder="Ex: samuel@kenzie.com.br" {...register("email") } onChange={(e) => setValueEmail(e.target.value) }/>
                            <FormErrorMessage>
                                {errors.email && `${errors.email.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.cpf ? true : false} isRequired={errors.cpf ? true : false}>
                            <FormLabel>CPF</FormLabel>
                            <Input value={valueCpf} as={InputMask} mask="999.999.999-99" type="text" id="cpf" placeholder="000.000.000-00" {...register("cpf")} onChange={(e) => setValueCpf(e.target.value) }/>
                            <FormErrorMessage>
                                {errors.cpf && `${errors.cpf.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.cellPhone ? true : false} isRequired={errors.cellPhone ? true : false}>
                            <FormLabel>Celular</FormLabel>
                            <Input value={valueCell} as={InputMask} mask="(99) 99999-9999" type="text" id="cellPhone" placeholder="(DDD) 90000-0000" {...register("cellPhone")} onChange={(e) => setValueCell(e.target.value) }/>
                            <FormErrorMessage>
                                {errors.cellPhone && `${errors.cellPhone.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.birthdate ? true : false} isRequired={errors.birthdate ? true : false}>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input value={valueBirthDate} as={InputMask} mask="99/99/9999" type="text" id="birthdate" placeholder="00/00/0000" {...register("birthdate")} onChange={(e) => setValueBirthDate(e.target.value) } />
                            <FormErrorMessage>
                                {errors.birthdate && `${errors.birthdate.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.description ? true : false} isRequired={errors.description ? true : false}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea value={valueDescrip} maxLength={400} id="description" placeholder="Digitar descrição" {...register("description")} onChange={(e) => setValueDescrip(e.target.value) }/>
                            <FormErrorMessage>
                                {errors.description && `${errors.description.message}`}
                            </FormErrorMessage>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter gap={5}>
                        <Button h={'12'} w={'80%'} borderRadius={'base'} fontWeight={'medium'}  variant={"gray-1"}>Cancelar</Button>
                        <ModalDeleteUser/>
                        <Button h={'12'} w={'100%'} borderRadius={'base'} fontWeight={'medium'} fontSize={14} onClick={() => console.log('eu')} variant={"button-sender"} type="submit">Salvar alterações</Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ModalEditUser