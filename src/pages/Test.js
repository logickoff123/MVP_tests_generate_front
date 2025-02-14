import React from 'react';
import styles from './Test.module.css'
import { useNavigate } from 'react-router-dom';
//import 'Tippy' from '@tippyjs/rect';
import { useSnackbar } from  'notistack'

const Test = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const handleOpenNewTest = (
    event
  ) => {
    event.preventDefault() 
    var saveform = Object.fromEntries((new FormData(event.target)).entries())
    console.log(saveform)
     if (!saveform.subject || !saveform.level|| !saveform.topic )
      {
        enqueueSnackbar('Произошла ошибка.Заполните пустые поля', { variant: 'error' })
     return
    };

    navigate(`/alltests?subject=${saveform.subject}&level=${saveform.level}&topic=${saveform.topic}`);
  };
  return (
          <div className={styles.block1}>
        <h1 className={styles.text1}>Создание теста</h1>
        <form onSubmit = {
          handleOpenNewTest 
        }>
            <div className={styles.block2}>
              <div className={styles.block_content}>
                <div className={styles.block_setings}>
                  <div className={styles.option_block}>
                    <p className={styles.subject}>Предметы</p>
                    <select className={styles.tema} id="subject" name="subject">
                      <option value="" disabled selected>Выберите категорию</option>
                      <option value="math">Математика</option>
                    </select>
                  </div>

                  <div className={styles.option_block}>
                    <p className={styles.subject}>Уровень</p>
                    <select className={styles.tema} id="level" name="level">
                      <option value="" disabled selected>Выберите уровень</option>
                      <option value="easy">легкий</option>
                      <option value="norm">средний</option>
                      <option value="hard">сложный</option>
                    </select>
                  </div>

                  <div className={styles.option_block}>
                    <p className={styles.subject}>Темы</p>
                    <select className={styles.tema} id="topic" name="topic">
                      <option value="" disabled selected>Выберите тему</option>
                      <option value="matrix">Матрицы</option>
                      <option value="pro">Производная</option>
                      <option value="vectors">Вектора</option>
                      <option value="limits">Лимиты</option>
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
              <input type="submit" className={styles.save} name = "send"  value="Отправить"/>
            </div>
            </div>
          </form >
          </div>

  );
};

export default Test;
