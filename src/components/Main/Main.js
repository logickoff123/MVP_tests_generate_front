import React from 'react';
import styles from './Main.module.css';
import oval1 from '../../img/oval1.svg';

const Main = () => {
    return (
        <div>
            <div className={styles.baner}>
              <div classnamr = {styles.first_block}> 
                  <h1 className={styles.white}>Прокачай <span className={styles.green}>знания</span></h1>
                  <h1 className={styles.white}>для <span className={styles.green}>Успешной</span></h1>
                  <h1 className={styles.white}>сдачи <span className={styles.green}>Экзаменов</span></h1>
                  <img src = {oval1} alt = 'error' className = {styles.oval1}/>
              </div>
            </div>
        </div>
    );
}

export default Main;