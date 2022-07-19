import { Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Cart from "./Cart";
import Details from "./Details";

type Props = {};

const CheckoutPage = (props: Props) => {
  return (
    <Flex as="main" minH="100vh">
      <VStack w="full" h="full" px="3.5rem" py="3rem" spacing="3rem">
        <Heading
          mr="auto"
          sx={{
            fontSize: "36px",
            lineHeight: "44px",
            color: "#4E5150",
          }}
        >
          Checkout
        </Heading>
        <Stack direction="row" spacing="7rem" w="full" h="full">
          <Details />
          <Cart />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default CheckoutPage;
