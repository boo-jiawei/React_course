import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  StepNumber,
  useStatStyles,
} from "@chakra-ui/react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="auto"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        borderWidth={1}
        borderRadius="md"
        p={4}
        boxShadow="md"
      >
        <Text fontSize="x1">{num}</Text>
        <Button colorScheme="green" size="md" onClick={() => setNum(num + 1)}>
          +
        </Button>
        <Button colorScheme="red" size="md" onClick={() => setNum(num - 1)}>
          -
        </Button>
      </Flex>
    </Box>
  );
};

export default Counter;
