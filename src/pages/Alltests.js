import React from 'react';
import styles from "./Alltests.module.css" ;

const Alltests = () => {
  return (
    <div className = {styles.main_contanier}>
      <div className = {styles.all_contanier}>
        <div className = {styles.nomer_zadaniya}>
          <p className= {styles.text1}> Задание №1 </p>
          <div className  = {styles.task}>
            <p className= {styles.text2}>Задана функция y = 5x-8.Найдите ее значения при x = 2 </p>
          </div>
            <div className = {styles.otvet}>
              <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
              <label className ={styles.label} for="radio-1">10</label>

              <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
              <label className ={styles.label} for="radio-1">10</label>

              <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
              <label className ={styles.label} for="radio-1">10</label>

              <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
              <label className ={styles.label} for="radio-1">10</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Alltests;