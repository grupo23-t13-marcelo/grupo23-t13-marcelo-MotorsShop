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

const schema = Yup.object().shape({
    password: Yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Mínimo  de 8 caracteres")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "deve conter ao menos um caracter especial"),
  confirmPassword: Yup
    .string()
    .oneOf(
      [Yup.ref("password")],
      "confirmação de senha deve ser igual a senha"
  )
});

type FormData = Yup.InferType<typeof schema>;

export function RedefinePasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
      
    } catch (error) {
      
    }
    console.log(values);
  };

  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} bg={"gray.50"}>
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        bgColor={"whiteFixed"}
        boxSize={"md"}
        display={"flex"}
        justify={"space-evenly"}
        borderRadius={4}
        shadow={"lg"}
      >
        <Text fontSize={"2xl"} fontWeight={600} marginTop={"2"}>
          Redefina a sua senha 
        </Text>
        <FormControl id="email" isInvalid={!!errors.password} p={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={!!errors.confirmPassword} p={4}>
          <FormLabel>Confirmar senha</FormLabel>
          <Input type="password" {...register("confirmPassword")} />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Enviando..."
          disabled={isLoading}
         variant={"outline-2"}
        >
          Redefinir senha
        </Button>
        {error && (
          <Box color="red.500" marginTop="4">
            {error}
          </Box>
        )}
      </VStack>
    </Flex>
  );
}
