import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormErrorMessage, FormLabel, Input, Link, Text } from "@chakra-ui/react"
import { InputComponents } from "../../components/commons/Inputs"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate} from "react-router-dom"
import { AccessContext, AccessProvider } from "../../context/access/accessContext"
import { useContext } from "react"



export interface ILogin {
    email: string
    password: string
}


const LoginPage = () => {

    const {apiPostLogin, setIsLoading} = useContext(AccessContext)
    const navigate = useNavigate()
    const formScheme = yup.object().shape({
        email: yup.string().email('Tem que ser um Email').required("Usuário é obrigatório"),
        password: yup.string().required("Senha é Obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILogin>({
        resolver: yupResolver(formScheme)
    });

    const onSubmit = (formData: ILogin) => {
        setIsLoading(true)
        apiPostLogin(formData)

    }

    return (
        <Box bgColor={'gray.100'} h={[600, 658, 788, 855]} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Card maxW={['100%', '500px']} w={'90%'} h={['95%', '90%', '78%', '72%']} color={'whiteFixed'} border={'none'} alignItems={'center'}   >
                <CardHeader w={['95%', '95%', '83%']}>
                    <Text color={'gray.900'} fontWeight={'bolder'} fontSize={'24px'}  letterSpacing={'0.5px'} fontFamily={'Lexend'} paddingTop={'22px'}>Login</Text>
                </CardHeader>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <CardBody w={['100%', '440px']} display={'flex'} flexDirection={'column'} gap={4} alignItems={'flex-end'}>
                    <FormControl isInvalid={errors.email ? true : false} isRequired={errors.email ? true: false}>
                        <FormLabel fontSize={'14px'} fontWeight={'bold'} color={'gray.800'}>Email</FormLabel>
                        <Input color={'gray.900'} h={'12'} id="email"  placeholder="Digitar email" {...register('email')}/>
                        <FormErrorMessage>
                            {errors.email && `${errors.email?.message}`}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.password ? true : false} isRequired={errors.password ? true: false}>
                        <FormLabel fontSize={'14px'} fontWeight={'bold'} color={'gray.800'}>Senha</FormLabel>
                        <Input color={'gray.900'} type="password" id="password" h={'12'}  placeholder="Digitar Senha" {...register('password')}/>
                        <FormErrorMessage>
                            {errors.password && `${errors.password?.message}`}
                        </FormErrorMessage>
                    </FormControl>
                    <Link  color={'gray.900'} fontWeight={'bold'} fontSize={'14px'} onClick={ () => navigate("/forgotPassword")}>
                        Esqueci minha senha
                    </Link>
                </CardBody>
                    <CardFooter w={'100%'} marginBottom={'100px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
                        <Button variant={'button-sender'} w={'100%'} h={'48px'} type="submit">Entrar</Button>
                        <Text fontSize={'14px'} color={'gray.600'}>Ainda não possui conta?</Text>
                            <Button as={Link} href={'/register'} variant={'outline-1'} w={'100%'} h={'48px'} >Cadastrar</Button>
                    </CardFooter>
                </form>
            </Card>
        </Box>
    )
}


export default LoginPage
