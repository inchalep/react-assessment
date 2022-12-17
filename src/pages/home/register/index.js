import { Box, Flex, Text } from '@chakra-ui/react';
import React,{useState} from 'react';
import EmployeeForm from '../../../components/employeeForm';

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_salary: '',
    employee_age:'',
  });
  
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
          type={'Register'}
        />
      </Box>
    </Flex>
  );
};

export default RegisterEmployee;
