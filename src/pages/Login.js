import React from 'react';
import styles from "./Login.module.css";
import fon from "../img/fon.png";


const Login = () => {
  return (
    <div className ={styles.login}>
      <img src = {fon} alt = 'error' className={styles.fon}/>
      <div className = {styles.block}>
        
      </div>
    </div>
  );
};

export default Login;