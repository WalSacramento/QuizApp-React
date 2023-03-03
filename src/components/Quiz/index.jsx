import React, {useState} from 'react'
import { QuestionAnswer } from '../QuestionAnswer'

import S from './styles.module.scss'

const QUESTIONS = [
  {
    id: 1,
    question: 'Qual é o meu nome?',
    answers: ['Miguel', 'Luis', 'Matheus', 'Waldsson'],
    correctAnswer: 'Waldsson'
  },
  {
    id: 2,
    question: 'Qual é a minha idade?',
    answers: ['18', '22', '32', '20'],
    correctAnswer: '22'
  },
  {
    id: 3,
    question: 'O que sou?',
    answers: ['Desenvolvedor', 'Médico', 'Eletricista', 'Jogador de Futebol'],
    correctAnswer: 'Desenvolvedor'
  },

]

export function Quiz () {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTakingQuiz, setIsTakingQuiz] = useState(true)
  const currentQuestion = QUESTIONS
  [currentQuestionIndex]

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < QUESTIONS.length){
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  } else {
    setIsTakingQuiz(false)
  }
  }

  const handleAnswerQuestion = (event, question, userAnswer) => {
    const isCorrectAnswer = question.correctAnswer === userAnswer

    const resultClassName = isCorrectAnswer ? S.correct : S.incorrect

    event.currentTarget.classList.toggle(resultClassName)
  }

  const quizSize = QUESTIONS.length
  const navigationButtonText = currentQuestionIndex + 1 === quizSize ? 'Ver Resultado' : 'Próxima Pergunta'

  return (
    <div className={S.container}>
      <div className={S.card}>
        {isTakingQuiz ? (
          <div className={S.quiz}>
            <header>
              <span>PERGUNTA {currentQuestionIndex + 1}/{quizSize} </span>
              <p>{currentQuestion.question}</p>
            </header>
    
            <ul className={S.answers}>
              {currentQuestion.answers.map(answer => (
                <li key={answer}>
                  <QuestionAnswer 
                  question={currentQuestion}
                  answer={answer} 
                  handleAnswerQuestion={handleAnswerQuestion}/>
                </li>
              ) 
                )}
            </ul>
    
            <button className={S.navigationBtn} onClick={handleNextQuestion}>
              {navigationButtonText}
            </button>
          </div>
        ) : (
          <h1>Resultado</h1>
        )}
      </div>
    </div>
  )
}