import {
  PasswordInput,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  let error;

  const handleSubmit = async e => {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      navigate('/');
    } catch (err) {
      return (error = 'Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
          <Button disabled={loading} type="submit">
            Sign Up
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Signup;
