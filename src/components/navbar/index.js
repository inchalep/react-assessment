import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  return (
    <header>
      <Box
        p="10px 0"
        shadow='md'
      >
        <Flex alignItems="center"
        justifyContent="space-between" className="wrapper">
          <Heading as="h1" color="red.400">
            <NavLink to="/">
              <Text as="span">Employee</Text>
            </NavLink>
          </Heading>
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </header>
  );
};

export default Navbar;
