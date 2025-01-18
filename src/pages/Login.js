import styles from "./Login.module.css";
import fon from "../img/fon.png";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserMetadata } from '../hooks/useUserMetadata';



function LoginButton() {
  const hook_return_data = useAuth0();
  const {
    isAuthenticated,
    loginWithRedirect,
  } = hook_return_data;
  const { data: user, isSuccess } = useUserMetadata();
  console.log('LoginButton ~ hook_return_data:', hook_return_data);
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate('/test');
  // };
  console.log('LoginButton ~ user:', user);
  return isAuthenticated
    ? <span style={{ color: 'white' }}>Вы авторизованы как {isSuccess ? user.email : 'Загрузка...'}</span>
    : (
      <div className={styles.contanier}>
        <button className={styles.logreg} onClick={loginWithRedirect}>Регистрация/Авторизация</button>
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
