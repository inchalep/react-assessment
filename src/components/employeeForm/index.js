import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { _post, _put } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { fetchEmployee } from '../../redux/slices/employee';
import { useNavigate } from 'react-router-dom';
const EmployeeForm = ({ formData, setFormData, type, id }) => {
  const [errs, setErrs] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const fieldValidation = () => {
    const errors = {};
    const { employee_name, employee_salary, employee_age } = formData;
    if (!employee_name) {
      errors.employee_name = 'Please enter name.';
    }
    if (!employee_salary) {
      errors.employee_salary = 'Please enter salary.';
    }
    if (!employee_age) {
      errors.employee_age = 'Please enter age.';
    }
    return errors;
  };

  const inputHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setFormData({
      employee_name: '',
      employee_salary: '',
      employee_age: '',
    });
    setErrs({});
  };

  const formHandler = e => {
    e.preventDefault();
    setErrs(fieldValidation());
    const notValid = fieldValidation();
    if (Object.values(notValid).length <= 0) {
      try {
        if (id) {
          _put(`update/${id}`, formData);
        } else {
          _post('create', formData);
        }
        reset();
        dispatch(fetchEmployee());
        toast({
          title: 'Employee',
          description: `${
            id
              ? 'Employee updated successfully.'
              : 'Employee created successfully.'
          }`,
          status: 'success',
          duration: 2000,
          position: 'top-right',
          isClosable: true,
        });
        navigate('/');
      } catch (error) {
        toast({
          title: 'Employee',
          description: `${
            id
              ? 'Employee updated successfully.'
              : 'Employee created successfully.'
          }`,
          status: 'error',
          duration: 2000,
          position: 'top-right',
          isClosable: true,
        });
      }
    }
  };
  return (
    <Box>
      <form onSubmit={formHandler}>
        <FormControl isInvalid={errs.employee_name}>
          <FormLabel>Employee Name:</FormLabel>
          <Input
            name="employee_name"
            value={formData.employee_name}
            type="text"
            onChange={inputHandler}
          />
          <FormErrorMessage>{errs.employee_name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errs.employee_salary}>
          <FormLabel>Employee salary:</FormLabel>
          <Input
            name="employee_salary"
            value={formData.employee_salary}
            type="number"
            onChange={inputHandler}
          />
          <FormErrorMessage>{errs.employee_salary}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errs.employee_age}>
          <FormLabel>Employee age:</FormLabel>
          <Input
            name="employee_age"
            value={formData.employee_age}
            type="number"
            onChange={inputHandler}
          />
          <FormErrorMessage>{errs.employee_age}</FormErrorMessage>
        </FormControl>
        <Button w="full" mt="20px" type="submit" colorScheme="teal">
          {type}
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeForm;
