import styles from "./Registration.module.css";
import fon from '../img/fon.png';
import { useNavigate } from 'react-router-dom';
import React from 'react';


const Registration = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/test');
  };
  return (
      <div className={styles.login}>
        <img src={fon} alt="error" className={styles.fon} />
        <div className={styles.block}>
          <p className={styles.vhod}>Вход</p>
          <div className={styles.block1}>
            <input type="email" placeholder="Email" className={styles.email} />
            <input type="text" placeholder="ФИО" className={styles.password} />
            <button className={styles.knopkavhod} onClick={handleLogin}>Войти</button>
          </div>
        </div>
      </div>
    );
  };

export default Registration;