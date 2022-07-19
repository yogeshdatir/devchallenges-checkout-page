import { ChakraProvider, theme, Container } from "@chakra-ui/react";
import CheckoutPage from "./components/CheckoutPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.lg">
      <CheckoutPage />
    </Container>
  </ChakraProvider>
);
