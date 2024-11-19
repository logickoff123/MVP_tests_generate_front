import styles from "./Login.module.css";
import fon from "../img/fon.png";

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={fon} alt="error" className={styles.fon} />
      <div className={styles.block}>
        <p className={styles.vhod}>Вход</p>
        <div className={styles.block1}>
          <input type="email" placeholder="Email" className={styles.email} />
          <input type="text" placeholder="ФИО" className={styles.password} />
          <button className={styles.knopkavhod}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Login;