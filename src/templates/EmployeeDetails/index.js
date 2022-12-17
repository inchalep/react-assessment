import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import EmployeeForm from '../../components/employeeForm';

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    usr: '',
    pwd: '',
  });
  const [errs, setErrs] = useState({});
  return (
    <Flex
      h="90vh"
      z
      justifyContent="center"
      alignItems="center"
      className="wrapper"
    >
      <Box p="45px 65px 65px" border='1px' borderColor='blackAlpha.100' shadow="md" rounded="md">
        <Text
          pb="20px"
          fontSize="45px"
          color="red.400"
          fontWeight="bold"
          textAlign="center"
        >
          EmployeeDetails
        </Text>
        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
        />
      </Box>
    </Flex>
  );
};

export default EmployeeDetails;
