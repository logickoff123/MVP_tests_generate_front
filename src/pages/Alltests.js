import React from 'react';
import styles from "./Alltests.module.css" ;

const Alltests = () => {
  return (
    <div className = {styles.main_container}>
        <div className = {styles.nomer_zadaniya}>
          <p className= {styles.text1}> Задание №1 </p>
          <div className  = {styles.task}>
            <p className= {styles.text2}>Задана функция функция функция функция функция функция функция функция y = 5x-8.Найдите ее значения при x = 2 </p>
          </div>
            <div className = {styles.otvet}>
              <button className = {styles.blue}>20</button>
              <button className = {styles.green}>20</button>
              <button className = {styles.orange}>20</button>
              <button className = {styles.pink}>20</button>
            </div>
        </div>
    </div>
  );
};

export default Alltests;
