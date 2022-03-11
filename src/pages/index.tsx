import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import * as yup from 'yup';
import { useCallback, useMemo } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const defaultValues = {
  email: '',
  password: '',
};

const Home = () => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const isSubmitButtonDisabled = useMemo(() => {
    return isEmpty(dirtyFields) || !isValid;
  }, [dirtyFields, isValid]);

  const onSubmit = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        name="loginForm"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        w="100%"
        maxW={360}
        flexDirection="column"
        bg="gray.800"
        p="8"
        rounded="lg"
      >
        <Stack spacing="4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="E-mail"
                type="email"
                isInvalid={!!errors.email}
                helperText={errors?.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Senha"
                type="password"
                isInvalid={!!errors.password}
                helperText={errors?.password?.message}
                {...field}
              />
            )}
          />
        </Stack>
        <Button
          type="submit"
          colorScheme="pink"
          mt="6"
          size="lg"
          disabled={isSubmitButtonDisabled}
          // isLoading
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
