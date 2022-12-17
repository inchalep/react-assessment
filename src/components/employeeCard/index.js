import React from 'react';

import { Box, Flex, ListItem, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
  const { colorMode } = useColorMode()
  return (
    <ListItem
      key={employee.id}
      boxShadow='none'
      border='1px'
      rounded='md'
      borderColor= {colorMode==='dark'?'whiteAlpha.300':'blackAlpha.300'}
      mb='20px'
      flexBasis={['100%', '100%', '49%', '24%']}
      _hover={{
        boxShadow: 'md',
      }}
    >
      <Link to={`/home/employee/${employee.id}`}>
        <Box p='15px'>
          <Flex>
            <Text fontWeight='bold' pr='5px'>
              Employee ID :
            </Text>
            <Text>{employee.id}</Text>
          </Flex>
          <Flex>
            <Text fontWeight='bold' pr='5px'>
              Name :
            </Text>
            <Text>{employee.employee_name}</Text>
          </Flex>
        </Box>
      </Link>
    </ListItem>
  );
};

export default EmployeeCard;
