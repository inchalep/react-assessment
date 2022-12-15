import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  return (
    <header>
      <Flex
        p="10px 0"
        className="wrapper"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h1" color="red.400">
          <NavLink to="/">
            <Text as="span">LOGO</Text>
          </NavLink>
        </Heading>
        <Flex>
          <UnorderedList
            pr="45px"
            listStyleType="none"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <ListItem>
              <NavLink
                to="/clients"
                title="Clients"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                Clients
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/general"
                title="Genaral"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                Genaral
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/login"
                title="Login"
                className={({ isActive }) =>
                  isActive ? 'nav-active' : undefined
                }
              >
                Login
              </NavLink>
            </ListItem>
          </UnorderedList>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </header>
  );
};

export default Navbar;
