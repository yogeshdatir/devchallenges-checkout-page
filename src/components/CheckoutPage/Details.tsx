import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Details = (props: Props) => {
  return (
    <VStack as="section" w="50%" h="full" spacing="3rem">
      <VStack w="full" align="flex-start">
        <Heading
          as="h2"
          sx={{ fontSize: "18px", lineHeight: "22px", color: "#333333" }}
        >
          Contact information
        </Heading>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
          >
            E-mail
          </FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
          >
            Phone
          </FormLabel>
          <Input />
        </FormControl>
      </VStack>
      <VStack align="flex-start">
        <Heading
          as="h2"
          sx={{ fontSize: "18px", lineHeight: "22px", color: "#333333" }}
        >
          Shipping address
        </Heading>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
          >
            Full name
          </FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
          >
            Address
          </FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
          >
            City
          </FormLabel>
          <Input />
        </FormControl>
        <SimpleGrid columns={2} spacing="2rem">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel
                sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
              >
                Country
              </FormLabel>
              <Select></Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel
                sx={{ fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" }}
              >
                Postal code
              </FormLabel>
              <Input />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <Checkbox
          sx={{
            span: { fontSize: "12px", lineHeight: "15px", color: "#4F4F4F" },
          }}
        >
          <Text as="span" sx={{}}>
            Save this information for next time
          </Text>
        </Checkbox>
        <Button style={{ marginLeft: "auto" }}>Continue</Button>
      </VStack>
    </VStack>
  );
};

export default Details;
