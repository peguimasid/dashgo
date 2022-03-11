import { FunctionComponent } from 'react';

import { Flex, Icon, IconButton, Input, Text } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

const Header: FunctionComponent = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1420}
      h="20"
      mx="auto"
      mt="4"
      px="24"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="3"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        pos="relative"
        bg="gray.800"
        rounded="full"
        cursor="text"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <IconButton
          rounded="full"
          bgColor="gray.700"
          _hover={{ bgColor: 'gray.600' }}
          _active={{ bgColor: 'gray.500' }}
          aria-label="search-in-platform"
          icon={<RiSearchLine />}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
