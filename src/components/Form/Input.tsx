import { forwardRef, FunctionComponent } from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  helperText?: string;
}

export const Input: FunctionComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(({ name, label, isInvalid, helperText, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        isInvalid={isInvalid}
        _hover={{ bgColor: 'grey.900' }}
        errorBorderColor="red.600"
        size="lg"
        ref={ref}
        {...rest}
      />
      {isInvalid && (
        <FormHelperText color="red.600">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
});
