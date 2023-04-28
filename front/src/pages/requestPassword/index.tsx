import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
  Box,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um endereço de e-mail válido")
    .required("O e-mail é obrigatório"),
});

type FormData = Yup.InferType<typeof schema>;

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const toast = useToast();

  const onSubmit = async (values: FormData) => {

    try {
      setIsLoading(true)
      const {data} = await api.post<AxiosResponse>(`/users/reset`, values)
      toast({
        duration: 3000,
        description: "Enviado com sucesso! :)",
        status: "success"
      })
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      toast({
        duration: 3000,
        description: "Ops algo deu errado! :(",
        status: "error"
      })
      setIsLoading(false)
    }
  
  };

  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} bg={"gray.50"}>
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        bgColor={"whiteFixed"}
        boxSize={"sm"}
        display={"flex"}
        justify={"space-around"}
      >
        <Text fontSize={"2xl"} fontWeight={600}>
          Esqueceu a senha ?
        </Text>
        <FormControl id="email" isInvalid={!!errors.email} p={6}>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Enviando..."
          disabled={isLoading}
          marginTop="4"
          variant={"outline-2"}
        >
          Redefinir senha
        </Button>
      </VStack>
    </Flex>
  );
}
