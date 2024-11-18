import React from 'react';
import styles from './Main.module.css';
import all from '../../img/all.svg'
const Main = () => {
    return (
        <div>
            <div className={styles.baner}>
              <img src = {all} alt='error'/>
              <div className={styles.textbox}>
                <h1 className={styles.white}>Прокачай <span className={styles.green}>знания</span></h1>
                <h1 className={styles.white}>для <span className={styles.green}>Успешной</span></h1>
                <h1 className={styles.white}>сдачи <span className={styles.green}>Экзаменов</span></h1>
                <p className ={styles.grey}>Предоставляем вам новейшую систему составления</p>
                <p className ={styles.grey}>тестовых заданий на базе ИИ, которая поможет расширить</p>
                <p className ={styles.grey}> ваши знания</p>
                <button className = {styles.begin}>Начать</button>
              </div>
            </div>
        </div>
    );
}

export default Main;