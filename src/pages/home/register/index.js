import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import EmployeeForm from '../../../components/employeeForm';

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_salary: '',
    employee_age: '',
  });

  return (
    <Box h="90vh">
      <Box pt="45px" className="wrapper">
        <Text
          pb="20px"
          fontSize="35px"
          color="red.400"
          fontWeight="bold"
          textAlign="center"
        >
          New Employee
        </Text>
        <Box w={['100%', '100%', '45%']} pt='25px' m='0 auto'>
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            type={'Register'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterEmployee;
