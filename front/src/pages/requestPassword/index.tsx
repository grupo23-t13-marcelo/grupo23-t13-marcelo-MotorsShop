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
  email: Yup.string()
    .email("Insira um endereço de e-mail válido")
    .required("O e-mail é obrigatório"),
});

type FormData = Yup.InferType<typeof schema>;

export function ForgotPasswordForm() {
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
        {error && (
          <Box color="red.500" marginTop="4">
            {error}
          </Box>
        )}
      </VStack>
    </Flex>
  );
}
