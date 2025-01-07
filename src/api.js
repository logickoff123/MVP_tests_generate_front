import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Замените на ваш URL
});

export const registerUser = async (username, email) => {
  const response = await apiClient.post('/register/', { username, email });
  return response.data;
};

export const generateQuestion = async (amount, difficulty, topic) => {
  const response = await apiClient.post('/generate_question/', { amount, difficulty, topic });
  return response.data;
};