import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const [formData, setFormData] = useState({
    usr: '',
    pwd: '',
  });

  const [errs, setErrs] = useState({});

  const fieldValidation = () => {
    const errors = {};
    const { usr, pwd } = formData;
    if (!usr) {
      errors.usr = 'Please enter email.';
    }
    if (!pwd) {
      errors.pwd = 'Please enter password.';
    }
    return errors;
  };

  const inputHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setFormData({
      usr: '',
      pwd: '',
    });
    setErrs({});
  };

  const formHandler = e => {
    e.preventDefault();
    setErrs(fieldValidation());
    const notValid = fieldValidation();
    if (Object.values(notValid).length <= 0) {
      alert('submit successfully..!');
      reset();
    }
  };
  return (
    <Flex
      h="90vh"
      z
      justifyContent="center"
      alignItems="center"
      className="wrapper"
    >
      <Box p="45px 65px 65px" shadow="md" rounded="md">
        <Text
          pb="20px"
          fontSize="45px"
          color="red.400"
          fontWeight="bold"
          textAlign="center"
        >
          Login
        </Text>
        <form onSubmit={formHandler}>
          <FormControl isInvalid={errs.usr}>
            <FormLabel>Email</FormLabel>
            <Input
              name="usr"
              value={formData.usr}
              type="text"
              onChange={inputHandler}
            />
            <FormErrorMessage>{errs.usr}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errs.pwd}>
            <FormLabel>Password</FormLabel>
            <Input
              name="pwd"
              value={formData.pwd}
              type="password"
              onChange={inputHandler}
            />
            <FormErrorMessage>{errs.pwd}</FormErrorMessage>
          </FormControl>
          <Button w="full" mt="20px" type="submit" colorScheme="teal">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
