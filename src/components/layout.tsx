import React, { ReactElement } from "react";
import { Box, Flex, Spacer, Center, Button, Text } from "@chakra-ui/react";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <Flex direction="column" h="100%" bg="gray.50">
      <Box
        bg="teal.400"
        // w={["10%", "40%", "60%", "100%"]}
        w={"100%"}
        p={4}
        color="white"
        textColor="black"
      >
        <Flex>
          <Center>123</Center>
          <Spacer />
          <Flex>
            <Button colorScheme="teal" mr="4">
              Sign Up
            </Button>
            <Button colorScheme="teal">Sign In</Button>
          </Flex>
        </Flex>
      </Box>
      <Spacer />
      {children}
      <Spacer />
      <Box sx={{}} bg="teal.400" w="100%" p={4} color="white" textColor="black">
        bottom
      </Box>
    </Flex>
  );
}
