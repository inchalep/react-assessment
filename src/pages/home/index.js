import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployee } from '../../redux/slices/employee';

const Login = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const dispatch = useDispatch();
  const { employees } = useSelector(state => state.employee);
  console.log(allEmployees, 'allEmployees');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData();
  }, [employees]);

  const fetchData = () => {
    dispatch(fetchEmployee());
  };

  const setData = () => {
    if (employees) {
      setAllEmployees(employees);
    }
  };
  return (
    <Box>
      <Box className="wrapper">
        <UnorderedList listStyleType="none">
          {allEmployees.length &&
            allEmployees.map(employee => {
              console.log(employee, 'employee');
              return <ListItem key={employee.id}>
                
              </ListItem>;
            })}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Login;
