import React, { useState, useEffect } from 'react';
import { Box, Spinner, Text, useToast } from '@chakra-ui/react';
import EmployeeForm from '../../components/employeeForm';
import { useParams } from 'react-router-dom';
import { _get } from '../../utils/api';

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_salary: '',
    employee_age: '',
  });
  const [loader, setLoadr] = useState(false);
  const toast = useToast();
  const { id } = useParams();

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      setLoadr(true);
      const res = await _get(`employee/${id}`);
      if (res.data) {
        setFormData({
          employee_name: res.data.data.employee_name,
          employee_salary: res.data.data.employee_salary,
          employee_age: res.data.data.employee_age,
        });
        setLoadr(false);
      }
    } catch (err) {
      toast({
        title: 'Employee',
        description: 'Employee not found',
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      });
      setLoadr(false);
    }
  };

  return (
    <Box pt="45px" className="wrapper">
      <Text pb="20px" color="red.400" fontWeight="bold" fontSize="35px">
        Employee Details
      </Text>
      {loader ? (
        <Spinner color="green.500" />
      ) : (
        <Box w={['100%','100%','45%']}>
          <Text pb='20px' fontSize='18px' fontWeight='bold' >ID: {id}</Text>
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            type="Save"
            id={id}
          />
        </Box>
      )}
    </Box>
  );
};

export default EmployeeDetails;
