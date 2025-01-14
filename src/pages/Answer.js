import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Answer.module.css";

const Answer = () => {
    const navigate = useNavigate();
    const handleMain = () => {
      navigate('/');
    };
    return (
      <div className={styles.allAnswers}>
        <h1 className={styles.header1}>Ваши результаты</h1>
        <p className={styles.header1}>10/10</p>
        <button className={styles.button} onClick={handleMain}>На главную</button>
      </div>
    );
  };
  
  export default Answer;