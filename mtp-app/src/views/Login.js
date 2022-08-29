import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Flex,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await login({
          email: values.email,
          password: values.password,
        });
        if (response.access_token) {
          setTimeout(() => {
            navigate("/");
          }, 500);
          toast({
            title: "Success",
            description: "You have successfully logged in",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      } catch (e) {
        toast({
          title: "Login failed",
          description: "Please check your email and password",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } finally {
        setIsLoading(false);
      }
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
  });

  return (
    <Flex p={20} justify="center" width="full">
      <form onSubmit={handleSubmit} noValidate>
        <Center minW={400} flexDirection="column" gap={5}>
          <Image src="/logo.png" width={300} />
          <Text fontSize="3xl" fontWeight="bold">
            Login
          </Text>
          <FormControl isInvalid={touched.email && errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              disabled={isLoading}
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={touched.password && errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              disabled={isLoading}
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <Button w="full" type="submit" isLoading={isLoading}>
            Login
          </Button>
        </Center>
      </form>
    </Flex>
  );
};

export default Login;
