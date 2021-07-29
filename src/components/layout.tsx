import React, { ReactElement } from "react";
import {
  Box,
  Flex,
  Spacer,
  Center,
  Button,
  Text,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  children: JSX.Element;
}

export default function Layout(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
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
          <Center><Link href={'/'}>Trang chủ</Link></Center>
          <Spacer />
          <Flex>
            <Button onClick={toggleColorMode} mr="4">
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <Button colorScheme="teal" mr="4">
              Sign Up
            </Button>
            <Button colorScheme="teal">Sign In</Button>
          </Flex>
        </Flex>
      </Box>
      <Spacer />
      {/* <Container maxW="container.xl">{children}</Container>
      <Spacer />
      <Box sx={{}} bg="teal.400" w="100%" p={4} color="white" textColor="black">
        bottom
      </Box> */}
    </Flex>
  );
}
