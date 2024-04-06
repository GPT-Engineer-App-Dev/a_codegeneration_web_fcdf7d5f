import React from "react";
import { ChakraProvider, Box, Text, VStack, Grid, theme, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaRobot, FaCode, FaPlay } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleGenerateCode = () => {
    // Placeholder for code generation logic
    toast({
      title: "Code generated.",
      description: "We've generated your code snippet successfully!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Box>
              <FaRobot size="3em" />
              <Text fontSize="2xl" fontWeight="bold">
                CodeGeneration.AI
              </Text>
            </Box>
            <Box maxW="md" width="full">
              <Textarea placeholder="Describe the code you want to generate..." size="lg" />
            </Box>
            <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" onClick={handleGenerateCode}>
              Generate Code
            </Button>
            <Box p={5} shadow="md" borderWidth="1px" maxW="md" width="full" textAlign="left">
              <Text mb={2}>Generated Code:</Text>
              <Box p={3} borderWidth="1px" borderRadius="md" backgroundColor="gray.50">
                <Text color="gray.600">// Your generated code will appear here...</Text>
                {/* Placeholder for dynamically generated code */}
              </Box>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
