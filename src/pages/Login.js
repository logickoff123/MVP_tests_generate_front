import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext'; // Импортируйте useAuth
import styles from "./Login.module.css";
import fon from "../img/fon.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Используйте хук для получения функции login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password); // Передайте email и password в функцию login
      navigate('/test'); // Перенаправьте пользователя на другую страницу после успешного входа
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };

  return (
    <div className={styles.login}>
      <img src={fon} alt="error" className={styles.fon} />
      <div className={styles.block}>
        <p className={styles.vhod}>Вход</p>
        <div className={styles.block1}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.email} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Обновление состояния email
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            className={styles.password} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // Обновление состояния password
          />
          <button className={styles.knopkavhod} onClick={handleLogin}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Login;