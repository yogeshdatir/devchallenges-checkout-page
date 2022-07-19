import {
  AspectRatio,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CountButton from "./assets/CountButton";
import Product1 from "./assets/photo1.png";
import Product2 from "./assets/photo2.png";

type Props = {};

const Cart = (props: Props) => {
  return (
    <VStack as="section" w="50%" maxH="full" align="flex-start">
      <VStack w="full" bg="#F2F2F2" p="2rem" borderRadius={12} spacing="6rem">
        <VStack w="full" spacing="2rem">
          <HStack w="full" spacing={5}>
            <AspectRatio ratio={1} w="6.5rem" h="6.5rem">
              <Image src={Product1} alt="product1" />
            </AspectRatio>
            <VStack
              flex={1}
              alignItems="flex-start"
              justify="space-between"
              h="full"
            >
              <VStack align="flex-start">
                <Text>Vintage Backbag</Text>
                <HStack justify="flex-start">
                  <Text as="span">$54.99</Text>
                  <Text as="span">$94.99</Text>
                </HStack>
              </VStack>
              <CountButton />
            </VStack>
          </HStack>
          <HStack w="full" spacing={5}>
            <AspectRatio ratio={1} w="6.5rem" h="6.5rem">
              <Image src={Product2} alt="product2" />
            </AspectRatio>
            <VStack
              flex={1}
              alignItems="flex-start"
              justify="space-between"
              h="full"
            >
              <VStack align="flex-start">
                <Text>Levi Shoes</Text>
                <HStack justify="flex-start">
                  <Text as="span">$74.99</Text>
                  <Text as="span">$124.99</Text>
                </HStack>
              </VStack>
              <CountButton />
            </VStack>
          </HStack>
        </VStack>
        <VStack w="full">
          <Divider bgColor="#BDBDBD" borderWidth="1px" opacity={1} />
          <HStack>
            <Text as="span">Shipping</Text>
            <Text as="span">$19</Text>
          </HStack>
          <Divider bgColor="#BDBDBD" borderWidth="1px" opacity={1} />
          <HStack>
            <Text as="span">Total</Text>
            <Text as="span">$148.98</Text>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
