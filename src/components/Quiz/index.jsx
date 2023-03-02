import React from 'react'
import { QuestionAnswer } from '../QuestionAnswer'

import S from './styles.module.scss'

export function Quiz () {
  return (
    <div className = {S.container}>
      <div className={S.card}>
        <header>
          <span>PERGUNTA 1/3</span>
          <p>Qual a minha idade?</p>
        </header>

        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
      </div>
    </div>
  )
}