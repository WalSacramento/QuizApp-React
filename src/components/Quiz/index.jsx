import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { QuestionAnswer } from '../QuestionAnswer'
import { Result } from '../Result'
import { ProgressBar } from '../ProgressBar';

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
  {
    id: 4,
    question: 'Onde moro?',
    answers: ['Penedo', 'Feliz Deserto', 'Recife', ' Maceió'],
    correctAnswer: 'Penedo'
  },

]

export function Quiz () {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTakingQuiz, setIsTakingQuiz] = useState(true)
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false)
  const currentQuestion = QUESTIONS[currentQuestionIndex]
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const handleNextQuestion = () => {
    if (currentQuestionNumber < QUESTIONS.length){
    setCurrentQuestionIndex(currentQuestionNumber)
  } else {
    setIsTakingQuiz(false)
  }
  setIsCurrentQuestionAnswered(false)
  }

  const handleAnswerQuestion = (event, question, userAnswer) => {
    if (isCurrentQuestionAnswered) {
      return
    }

    const isCorrectAnswer = question.correctAnswer === userAnswer

    const resultClassName = isCorrectAnswer ? S.correct : S.incorrect

    event.currentTarget.classList.toggle(resultClassName)
    
    if (isCorrectAnswer) {
      setCorrectAnswerCount(correctAnswerCount + 1)
    }

    setIsCurrentQuestionAnswered(true)
  }

  const handleTryAgain = () => {
    setIsTakingQuiz(true)
    setCurrentQuestionIndex(0)
    setCorrectAnswerCount(0)
  }

  const quizSize = QUESTIONS.length
  const navigationButtonText = currentQuestionIndex + 1 === quizSize ? 'Ver Resultado' : 'Próxima Pergunta';
  const currentQuestionNumber = currentQuestionIndex + 1

  return (
    
    <div className={S.container}>
      <div className={S.card}>
        {isTakingQuiz ? (
          <div className={S.quiz}>
            <ProgressBar 
            size={quizSize} 
            currentStep={currentQuestionNumber} />
            <header className={S.quizHeader}>
              <span>PERGUNTA {currentQuestionNumber}/{quizSize} </span>
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
    
            <div> 
              <button className={S.navigationBtn} onClick={handleNextQuestion}>
                {navigationButtonText}
              </button>
              
              <Link to='/'>
                <button className={S.navigationBtn}>Retornar ao início</button>
              </Link>
            </div>

          </div>
        ) : (
          <Result 
          correctAnswersCount={correctAnswerCount}
          quizSize={quizSize}
          handleTryAgain={handleTryAgain} />
        )
        }

        
      </div>
    </div>
  )
}