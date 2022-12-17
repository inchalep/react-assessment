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
import { Link } from 'react-router-dom';

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
        {allEmployees.length > 0 ? (
          <UnorderedList
            m="0"
            mt="45px"
            listStyleType="none"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            className="emp_list"
          >
            {allEmployees?.map(employee => {
              console.log(employee, 'employee');
              return (
                <ListItem
                  key={employee.id}
                  boxShadow="none"
                  border="1px"
                  rounded="md"
                  borderColor="blackAlpha.300"
                  mb="20px"
                  flexBasis={['100%', '100%', '49%', '24%']}
                  _hover={{
                    boxShadow: 'md',
                  }}
                >
                  <Link to={`/home/employee/${employee.id}`}>
                    <Box p="15px">
                      <Flex>
                        <Text fontWeight="bold" pr="5px">
                          Employee ID :
                        </Text>
                        <Text>{employee.id}</Text>
                      </Flex>
                      <Flex>
                        <Text fontWeight="bold" pr="5px">
                          Name :
                        </Text>
                        <Text>{employee.employee_name}</Text>
                      </Flex>
                    </Box>
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
        ) : (
          <Box mt="45px">
            <Text textAlign="center" fontSize="25px">
              No Employees.
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
