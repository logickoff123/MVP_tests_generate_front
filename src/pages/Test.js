import React from 'react';
import styles from './Test.module.css'
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/alltests');
  };
  return (
          <div className={styles.block1}>
        <h1 className={styles.text1}>Создание теста</h1>
            <div className={styles.block2}>
              <div className={styles.block_content}>
                <div className={styles.block_setings}>
                  <div className={styles.option_block}>
                    <p className={styles.subject}>Предметы</p>
                    <select className={styles.tema} id="dropdown" name="category">
                      <option value="" disabled selected>Выберите категорию</option>
                      <option value="math">Математика</option>
                      <option value="history">История</option>
                      <option value="english">Английский</option>
                    </select>
                  </div>

                  <div className={styles.option_block}>
                    <p className={styles.subject}>Уровень</p>
                    <select className={styles.tema} id="dropdown" name="category">
                      <option value="" disabled selected>Выберите уровень</option>
                      <option value="math">1 курс</option>
                      <option value="history">11 класс</option>
                      <option value="english">10 класс</option>
                    </select>
                  </div>

                  <div className={styles.option_block}>
                    <p className={styles.subject}>Темы</p>
                    <select className={styles.tema} id="dropdown" name="category">
                      <option value="" disabled selected>Выберите тему</option>
                      <option value="math">Матрицы</option>
                      <option value="history">Производная</option>
                      <option value="english">Вектора</option>
                      <option value="english">Лимиты</option>
                    </select>
                    {/*
                    <div className={styles.save_button_wrapper}>
                      <button className={styles.save} onClick={handleLogin}>Создать тест</button>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            <div className={styles.save_button_wrapper}>
              <button className={styles.save} onClick={handleLogin}>Создать тест</button>
            </div>
            </div>
          </div>

  );
};

export default Test;
