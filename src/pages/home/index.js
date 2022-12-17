import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployee } from '../../redux/slices/employee';
import EmployeeCard from '../../components/employeeCard';

const Login = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const dispatch = useDispatch();
  const { employees } = useSelector(state => state.employee);

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
              return (
                <EmployeeCard employee={employee}/>
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
