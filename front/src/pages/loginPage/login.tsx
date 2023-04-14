import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { InputComponents } from "../../components/commons/Inputs"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate} from "react-router-dom"


export interface ILogin {
    usuario: string
    senha: string
}


const LoginPage = () => {

    const formScheme = yup.object().shape({
        usuario: yup.string().required("Usuário é obrigatório"),
        senha: yup.string().required("Senha é Obrigatória")
    })

    const {register,handleSubmit, formState: {errors}} = useForm<ILogin>({
        resolver: yupResolver(formScheme)
    })

    const navigate = useNavigate()


    return (
        <Box bgColor={'gray.100'} h={[600, 658, 788]} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Card w={['95%', '50%', '55%', '25%']} h={['95%', '90%', '78%', '72%']} color={'whiteFixed'} border={'none'} alignItems={'center'}   >
                <CardHeader w={['95%', '95%', '83%']}>
                    <Text color={'grey0'} fontWeight={'bolder'} fontSize={'24px'}  letterSpacing={'0.5px'} fontFamily={'Lexend'} paddingTop={'22px'}>Login</Text>
                </CardHeader>
                <CardBody w={['95%', '95%', '84%']} display={'flex'} flexDirection={'column'} gap={4} alignItems={'flex-end'}>
                    <FormControl isInvalid={errors.usuario ? true : false} isRequired={errors.usuario ? true: false}>
                        <FormLabel fontSize={'14px'} fontWeight={'bold'} color={'gray.800'}>Usuário</FormLabel>
                        <Input h={'12'}  placeholder="Digitar Usuario" {...register('usuario')}/>
                    </FormControl>
                    <FormControl isInvalid={errors.senha ? true : false} isRequired={errors.senha ? true: false}>
                        <FormLabel fontSize={'14px'} fontWeight={'bold'} color={'gray.800'}>Senha</FormLabel>
                        <Input h={'12'}  placeholder="Digitar Senha" {...register('senha')}/>
                    </FormControl>
                    <Text color={'gray.900'} fontWeight={'bold'} fontSize={'14px'} >Esqueci minha senha</Text>
                </CardBody>
                    <CardFooter w={['95%', '95%', '82%']} marginBottom={'100px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
                        <Button variant={'button-sender'} w={'100%'} h={'48px'}>Entrar</Button>
                        <Text fontSize={'14px'} color={'gray.600'}>Ainda não possui conta?</Text>
                        <Button variant={'outline-1'} w={'100%'} h={'48px'} onClick={() => navigate('/register')}>Cadastrar</Button>
                    </CardFooter>
            </Card>
        </Box>
    )
}


export default LoginPage