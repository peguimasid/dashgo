import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        flexDirection="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        rounded="lg"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'grey.900' }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'grey.900' }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
