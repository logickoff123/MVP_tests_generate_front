// src/GenerateQuestion.js
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { generateQuestion } from './api';

const GenerateQuestion = () => {
  const [amount, setAmount] = useState(1);
  const [difficulty, setDifficulty] = useState('easy');
  const [topic, setTopic] = useState('math');

  const mutation = useMutation(generateQuestion, {
    onSuccess: (data) => {
      console.log(data); // Здесь можно обработать полученные вопросы
    },
    onError: (error) => {
      alert(error.response.data.detail);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ amount, difficulty, topic });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Generating...' : 'Generate Questions'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
};