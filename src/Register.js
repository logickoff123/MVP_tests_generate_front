import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const mutation = useMutation(registerUser, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.response.data.detail);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Registering...' : 'Register'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
};

export default Register;