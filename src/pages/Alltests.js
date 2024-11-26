import React from 'react';
import styles from "./Alltests.module.css" ;

const Alltests = () => {
  return (
    <div className = {styles.main_contanier}>
      <div className = {styles.task1}>
        <div className = {styles.text_1}>
          <p className={styles.t_1}>Задана функция y = 5x-8.Найдите ее значения при x=2 </p>
            <div className = {styles.answer_1}>
              <p className = {styles.a_1}>20</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Alltests;