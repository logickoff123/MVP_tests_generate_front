import React from 'react';
import styles from "./Alltests.module.css" ;

const Alltests = () => {
  var question;
  var answer;
// foo
  fetch('http://127.0.0.1:8000/generate_question', {
    method: "POST",
    headers: {
	'Content-Type': 'application/json',
},
    body: JSON.stringify({
	"topic": "math",
	"difficulty": "easy",
	"amount": 10
    })
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data["question"])
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  const questions = [{
    questionIndex: 1,
    questionText: 'Задана функция функция функция функция функция функция функция функция y = 5x-8.Найдите ее значения при x = 2',
    answers: [
      { text: '10' },
      { text: '12' },
      { text: '20' },
      { text: '56' },
    ]
  },];

  const colors = [
    styles.blue,
    styles.green,
    styles.orange,
    styles.pink,
  ]

  return (
    <div className = {styles.main_container}>
      <ManyQuestionsComponent questions={questions.map(({
        questionIndex,
        questionText,
        answers
      }) => {
        const shuffledColors = colors
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }, index) => value);

        return ({
        questionIndex,
        questionText,
        answers: answers
          .map(({ text }, index) => ({text, className: shuffledColors[index]}))
      })})}/>
    </div>
  );
};

export default Alltests;



/**
 * Description placeholder
 *
 * @param {{ questions: { questionIndex: number; questionText: string; answers: { text: string, className: string }[]; }[] }} param0 
 * @param {{ questionIndex: number; questionText: string; answers: { text: string, className: string }[]; }[]} param0.questions 
 * @returns {*} 
 */
const ManyQuestionsComponent = ({ questions }) => <>
  {
    questions.map((props) => (
      <QuestionComponent key={props.questionIndex} {...props}/>
    ))
  }
</>

const questions = [{
  questionIndex: 1,
  questionText: 'Задана функция функция функция функция функция функция функция функция y = 5x-8.Найдите ее значения при x = 2',
  answers: [
    { className: styles.blue, text: '10' },
    { className: styles.green, text: '12' },
    { className: styles.orange, text: '20' },
    { className: styles.pink, text: '56' },
  ]
}]



/**
 * Description placeholder
 *
 * @param {{ questionIndex: number; questionText: string; answers: { text: string, className: string }[]; }} param0
 * @param { number } param0.questionIndex
 * @param { string } param0.questionText
 * @param { { text: string, className: string }[] } param0.answers
 * @returns {*}
 */
const QuestionComponent = ({ questionIndex, questionText, answers }) => (
  <div className = {styles.nomer_zadaniya}>
    <p className= {styles.text1}> Задание №{questionIndex} </p>
    <div className  = {styles.task}>
      <p className= {styles.text2}>{questionText}</p>
    </div>
    <div className = {styles.otvet}>
      {answers.map(({text, className}, i) => (
        <button key={i} className = {className}>{text}</button>
      ))}
    </div>
  </div>
)
