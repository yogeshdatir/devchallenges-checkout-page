import { Flex, IconButton } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {};

const CountButton = (props: Props) => {
  return (
    <Flex
      h="3rem"
      alignItems="center"
      w="full"
      justify="space-around"
      border="1px solid #828282"
      borderRadius={12}
    >
      <IconButton
        minW="auto"
        w="21px"
        h="21px"
        p="5px"
        bgColor="#E0E0E0"
        aria-label="add"
        icon={<FaPlus color="#828282" />}
      />
      1
      <IconButton
        minW="auto"
        w="21px"
        h="21px"
        p="5px"
        bgColor="#E0E0E0"
        aria-label="add"
        icon={<FaMinus color="#828282" />}
      />
    </Flex>
  );
};

export default CountButton;
