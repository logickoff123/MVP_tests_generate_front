import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Answer.module.css";
import {useAllAnswersQuery} from "../hooks/hooks";


const Answer = () => {
    const {total_answers, correct_answers} = useAllAnswersQuery()

    const navigate = useNavigate();
    const handleMain = () => {
      navigate('/');
    };
    return (
      <div className={styles.allAnswers}>
        <h1 className={styles.header1}>Ваши результаты</h1>
        <p className={styles.header1}>{correct_answers}/{total_answers}</p>
        <button className={styles.button} onClick={handleMain}>На главную</button>
      </div>
    );
  };
  
  export default Answer;