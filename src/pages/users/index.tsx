import { FunctionComponent } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Text,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
} from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { RiAddLine, RiPencilFill } from 'react-icons/ri';

const UserList: FunctionComponent = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" rounded="md" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              cursor="pointer"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilhermo Masid</Text>
                    <Text fontSize="sm" color="gray.300">
                      guilhermomasid@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de março de 2022</Td>
                <Td>
                  <IconButton
                    rounded="full"
                    bgColor="gray.700"
                    _hover={{ bgColor: 'gray.600' }}
                    _active={{ bgColor: 'gray.500' }}
                    aria-label="update-user"
                    icon={<RiPencilFill />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilhermo Masid</Text>
                    <Text fontSize="sm" color="gray.300">
                      guilhermomasid@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de março de 2022</Td>
                <Td>
                  <IconButton
                    rounded="full"
                    bgColor="gray.700"
                    _hover={{ bgColor: 'gray.600' }}
                    _active={{ bgColor: 'gray.500' }}
                    aria-label="update-user"
                    icon={<RiPencilFill />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Guilhermo Masid</Text>
                    <Text fontSize="sm" color="gray.300">
                      guilhermomasid@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>12 de março de 2022</Td>
                <Td>
                  <IconButton
                    rounded="full"
                    bgColor="gray.700"
                    _hover={{ bgColor: 'gray.600' }}
                    _active={{ bgColor: 'gray.500' }}
                    aria-label="update-user"
                    icon={<RiPencilFill />}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
