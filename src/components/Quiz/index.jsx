import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { QuestionAnswer } from '../QuestionAnswer'
import { Result } from '../Result'
import { ProgressBar } from '../ProgressBar'

import S from './styles.module.scss'

const QUESTIONS = [
  {
    id: 1,
    question: 'Qual é a função do método map() em JavaScript?',
    answers: [
      'Ele itera sobre um array e retorna um novo array com os resultados da função fornecida.',
      'Ele remove o último item de um array.',
      'Ele adiciona um novo item ao final de um array.',
      'Ele inverte a ordem dos elementos em um array.'
    ],
    correctAnswer:
      'Ele itera sobre um array e retorna um novo array com os resultados da função fornecida.'
  },
  {
    id: 2,
    question: 'Qual é o propósito do React.js?',
    answers: [
      'O React é um banco de dados relacional.',
      'O React é uma linguagem de programação.',
      'O React é um framework para desenvolvimento de aplicativos móveis.',
      'O React é uma biblioteca JavaScript para criar interfaces de usuário.'
    ],
    correctAnswer:
      'O React é uma biblioteca JavaScript para criar interfaces de usuário.'
  },
  {
    id: '3',
    question: 'O que é uma closure em JavaScript?',
    answers: [
      'É um objeto que contém propriedades e métodos.',
      'É uma função que tem acesso a variáveis ​​em seu escopo léxico, mesmo quando a função é executada fora desse escopo.',
      'É um elemento HTML que pode ser arrastado e solto.',
      'É uma função que é executada em um loop infinito.'
    ],
    correctAnswer:
      'É uma função que tem acesso a variáveis ​​em seu escopo léxico, mesmo quando a função é executada fora desse escopo.'
  },
  {
    id: 4,
    question: 'O que é um componente em React?',
    answers: [
      'Um componente é uma função que inverte a ordem dos elementos em um array.',
      'Um componente é um objeto que contém propriedades e métodos.',
      'Um componente é uma peça reutilizável de código que retorna elementos React.',
      ' Um componente é um objeto que contém propriedades e métodos.'
    ],
    correctAnswer:
      'Um componente é uma peça reutilizável de código que retorna elementos React.'
  }
]

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTakingQuiz, setIsTakingQuiz] = useState(true)
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] =
    useState(false)
  const currentQuestion = QUESTIONS[currentQuestionIndex]
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const handleNextQuestion = () => {
    if (currentQuestionNumber < QUESTIONS.length) {
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
  const navigationButtonText =
    currentQuestionIndex + 1 === quizSize ? 'Ver Resultado' : 'Próxima Pergunta'
  const currentQuestionNumber = currentQuestionIndex + 1

  return (
    <div className={S.container}>
      <div className={S.card}>
        {isTakingQuiz ? (
          <div className={S.quiz}>
            <ProgressBar size={quizSize} currentStep={currentQuestionNumber} />
            <header className={S.quizHeader}>
              <span>
                PERGUNTA {currentQuestionNumber}/{quizSize}{' '}
              </span>
              <p>{currentQuestion.question}</p>
            </header>

            <ul className={S.answers}>
              {currentQuestion.answers.map(answer => (
                <li key={answer}>
                  <QuestionAnswer
                    question={currentQuestion}
                    answer={answer}
                    handleAnswerQuestion={handleAnswerQuestion}
                  />
                </li>
              ))}
            </ul>

            <div>
              <button className={S.navigationBtn} onClick={handleNextQuestion}>
                {navigationButtonText}
              </button>

              <Link to="/">
                <button className={S.navigationBtn}>Retornar ao início</button>
              </Link>
            </div>
          </div>
        ) : (
          <Result
            correctAnswersCount={correctAnswerCount}
            quizSize={quizSize}
            handleTryAgain={handleTryAgain}
          />
        )}
      </div>
    </div>
  )
}
