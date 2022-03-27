import {
  PasswordInput,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRef } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();

  const { signup } = useAuth();

  const form = useForm({
    initialValues: {
      email: '',
      password: 'secret',
      confirmPassword: 'sevret',
      termsOfService: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    signup(emailRef.current.value, passRef.current.value);
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          ref={emailRef}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          ref={passRef}
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          ref={passConfirmRef}
          {...form.getInputProps('confirmPassword')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Sign Up</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Signup;
