import React from 'react'
import styles from "./Header.module.css"
import valltest from '../../img/valltest.svg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
    return (
      <header className={styles.header}>
        <div className = {styles.valltest}>
            <img src = {valltest} alt = 'Erorr'/>
        </div>
        <div className={styles.all_categories}>
            <p>Услуги</p>
            <p>Категории</p>
            <p>Популярное</p>
            <p>Отзывы</p>
            <p>О нас</p>
        </div>
        <div className={styles.registor}>
          <button className={styles.Registor} onClick={() => navigate('/registration')}>Регистрация</button>
          <button className={styles.Vhod} onClick={() => navigate('/login')}>Войти</button>
        </div>
      </header>
  
    )
  }
  
  export default Header