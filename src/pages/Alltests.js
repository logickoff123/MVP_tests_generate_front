import styles from "./Alltests.module.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useQuestionQuery} from '../hooks/hooks'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Alltests = () => {
  const questions = [
    {
      questionIndex: 1,
      questionText: 'Задана функция функция функция функция функция функция функция функция y = 5x-8.Найдите ее значения при x = 2',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 2,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 3,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 4,
      questionText: '2+2?',
      answers: [
        { text: '5' },
        { text: '4' },
        { text: 'NaN' },
        { text: 'RRRRRRRRRR' },
      ]
    },
    {
      questionIndex: 5,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 6,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 7,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 8,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 9,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
    {
      questionIndex: 10,
      questionText: '2+2?',
      answers: [
        { text: '\\( 10 \\)' },
        { text: '\\( 12 \\)' },
        { text: '\\( 20 \\)' },
        { text: '\\( 56 \\)' },
      ]
    },
  ];
  const urlParams = new URLSearchParams(window.location.search);
  const  subject = urlParams.get('subject');
  const   level= urlParams.get('level')
  const  topic = urlParams.get('topic')
  console.log(subject,level,topic)
  var data_raw = useQuestionQuery(
  {subject,level,topic}
  );

  if (data_raw["isSuccess"]) {
    for (var i = 0; i < 10; i++) {
      questions[i].questionText = data_raw.data?.batch[i]["question"]
      questions[i].answers[0].text = data_raw.data?.batch[i]["answer"]
    }
  }
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex - 1] = answerIndex; // Save the selected answer
    setSelectedAnswers(newSelectedAnswers);
  };


  const handleAnswer = () => {
    navigate('/answer');
  };

  return (
    <div className={styles.main_container}>
      <ManyQuestionsComponent
        questions={questions.map(({ questionIndex, questionText, answers }) => ({
          questionIndex,
          questionText,
          answers,
          selectedAnswer: selectedAnswers[questionIndex - 1], // Pass the selected answer
        }))}
        onAnswerChange={handleAnswerChange} // Pass function to change answer
      />
      <button className={styles.button1} onClick={handleAnswer}>Посмотреть ответ</button>
    </div>
  );
};

const QuestionComponent = ({ questionIndex, questionText, answers, selectedAnswer, onAnswerChange }) => {
  // Функция для проверки, содержит ли текст LaTeX выражения
  const containsLatex = (text) => {
    return text.includes('\\(') || text.includes('\\[');
  };

  // Функция для рендеринга текста с поддержкой LaTeX
  const renderTextWithLatex = (text) => {
    if (containsLatex(text)) {
      // Если текст содержит LaTeX, используем InlineMath или BlockMath
      return <InlineMath>{text}</InlineMath>;
    } else {
      // Иначе возвращаем обычный текст
      return text;
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.all_container}>
        <div className={styles.nomer_zadaniya}>
          <p className={styles.text1}> Задание №{questionIndex} </p>
          <div className={styles.task}>
            <p className={styles.text2}>{renderTextWithLatex(questionText)}</p>
          </div>
          <div className={styles.otvet}>
            {answers.map((answer, index) => (
              <div key={index}>
                <input
                  id={`radio-${questionIndex}-${index}`}
                  type="radio"
                  name={`radio-${questionIndex}`}
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => onAnswerChange(questionIndex, index)}
                  className={styles.radio}
                />
                <label className={styles.label} htmlFor={`radio-${questionIndex}-${index}`}>
                  {renderTextWithLatex(answer.text)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ManyQuestionsComponent = ({ questions, onAnswerChange }) => (
  <>
    {questions.map((props) => (
      <QuestionComponent key={props.questionIndex} {...props} onAnswerChange={onAnswerChange} />
    ))}
  </>
);

export default Alltests;
