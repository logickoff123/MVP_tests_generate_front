import React from 'react';
import styles from "./Alltests.module.css";
import { useQuestionQuery } from "./../hooks/hooks"
import { useNavigate } from 'react-router-dom'; /* маршрутизация на одну страницу как составить правльно  */

const Alltests = () => {
//   return (
//     <div className = {styles.main_contanier}>
//       <div className = {styles.all_contanier}>
//         <div className = {styles.nomer_zadaniya}>
//           <p className= {styles.text1}> Задание №1 </p>
//           <div className  = {styles.task}>
//             <p className= {styles.text2}>Задана функция y = 5x-8.Найдите ее значения при x = 2 </p>
//           </div>
//             <div className = {styles.otvet}>
//               <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
//               <label className ={styles.label} for="radio-1">10</label>

//               <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
//               <label className ={styles.label} for="radio-1">10</label>

//               <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
//               <label className ={styles.label} for="radio-1">10</label>

//               <input id="radio-1" type="radio" name="radio" value="1" checked className ={styles.radio}/>
//               <label className ={styles.label} for="radio-1">10</label>
//             </div>
//         </div>
//       </div>
//     </div>
//   );var question;
  var answer;
  const questions = [{
    questionIndex: 1,
    questionText: 'Задана функция функция функция функция функция функция функция функция y = 5x-8.Найдите ее значения при x = 2',
    answers: [
      { text: '10' },
      { text: '12' },
      { text: '20' },
      { text: '56' },
    ]
  }, {
    questionIndex: 2,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 3,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 4,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 5,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 6,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 7,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 8,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 9,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }, {
    questionIndex: 10,
    questionText: '2+2?',
    answers: [
      { text: '5' },
      { text: '4' },
      { text: 'NaN' },
      { text: 'RRRRRRRRRR' },
    ]
  }]
  var data_raw = useQuestionQuery();
  if (data_raw["isSuccess"]) {
    for (var i = 0; i < 10; i++) {
      questions[i].questionText = data_raw.data?.batch[i]["question"]
      questions[i].answers[0].text = data_raw.data?.batch[i]["answer"]
    }
  }
  const navigate = useNavigate();
  const handleAnswer = () => {
    navigate('/answer');
  };
return (
  <div className={styles.main_container}>
    <ManyQuestionsComponent questions={questions.map(({
      questionIndex,
      questionText,
      answers
    }) => {
      // const shuffledColors = colors
      //   .map(value => ({ value, sort: Math.random() }))
      //   .sort((a, b) => a.sort - b.sort)
      //   .map(({ value }, index) => value);

      return ({
        questionIndex,
        questionText,
        answers: answers
          // .map(({ text }, index) => ({ text, className: shuffledColors[index] }))
      })
    })} />
    <button className={styles.button1} onClick={handleAnswer}>Посмотреть ответ</button>
  </div>
);
};

const QuestionComponent = ({ questionIndex, questionText, answers }) => (
  <div className={styles.main_contanier}>
    <div className={styles.all_contanier}>
      <div className={styles.nomer_zadaniya}>
        <p className={styles.text1}> Задание №{questionIndex} </p>
        <div className={styles.task}>
          <p className={styles.text2}>{questionText}</p>
        </div>
        <div className={styles.otvet}>
          <input id="radio-1" type="radio" name="radio" value="1" checked className={styles.radio} />
          <label className={styles.label} for="radio-1">{answers[0].text}</label>

          <input id="radio-1" type="radio" name="radio" value="1" checked className={styles.radio} />
          <label className={styles.label} for="radio-1">{answers[1].text}</label>

          <input id="radio-1" type="radio" name="radio" value="1" checked className={styles.radio} />
          <label className={styles.label} for="radio-1">{answers[2].text}</label>

          <input id="radio-1" type="radio" name="radio" value="1" checked className={styles.radio} />
          <label className={styles.label} for="radio-1">{answers[3].text}</label>
        </div>
      </div>
    </div>
  </div>
);

const ManyQuestionsComponent = ({ questions }) => <>
  {
    questions.map((props) => (
      <QuestionComponent key={props.questionIndex} {...props} />
    ))
  }
</>

export default Alltests;