import React, { useState } from "react";
import { Box, HStack, Input, Button, Text } from "@chakra-ui/react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addtask = () => {
    if (input !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }

    console.log(tasks);
  };

  return (
    <Box
      p={4}
      maxW="400px"
      borderRadius="lg"
      borderWidth="1px"
      mt={10}
      mx="auto"
    >
      <HStack>
        <Input
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addtask} colorScheme="green">
          Add
        </Button>
      </HStack>
      {tasks.map((input, index) => {
        return <Text key={index}>{input}</Text>;
      })}
    </Box>
  );
};

export default ToDoList;
