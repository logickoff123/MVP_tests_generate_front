import styles from "./Login.module.css";
import fon from "../img/fon.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/test');
    
  };
  return !isAuthenticated && (
    
    <div className = {styles.contanier}>
      <button className = {styles.logreg} onClick={loginWithRedirect}>Регистрация/Авторизация</button>
    </div>
  );
}

export default LoginButton;




/*  return (
    <div className={styles.login}>
      <img src={fon} alt="error" className={styles.fon} />
      <div className={styles.block}>
        <p className={styles.vhod}>Вход</p>
        <div className={styles.block1}>
          <input type="email" placeholder="Email" className={styles.email} />
          <input type="text" placeholder="ФИО" className={styles.password} />
          <button className={styles.knopkavhod}  onClick={handleLogin}>Войти</button>
        </div>
      </div>
    </div>
  );
}; 
  export default Login;
*/
