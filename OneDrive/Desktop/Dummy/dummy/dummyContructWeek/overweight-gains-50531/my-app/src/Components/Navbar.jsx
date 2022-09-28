import React from "react";
import { Flex, Spacer, Box, Button, ButtonGroup, Heading } from '@chakra-ui/react'
// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return <div>
  <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Ecommerce App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='10'>
    <Button colorScheme='teal'>Home</Button>
    <Button colorScheme='teal'>Log in</Button>
    <Button colorScheme='teal'>Cart</Button>
  </ButtonGroup>
</Flex>
  </div>;
};

export default Navbar;
