import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

import S from './styles.module.scss'

export function AddQuestionForm() {
  const formik = useFormik({
    initialValues: { id: '', question: '', answers: '', correctAnswer: '' },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className={S.container}>
      <div className={S.card}>
        <h1>Adicionar pergunta ao quiz!</h1>

        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className={S.questionContainer}>
              <label>Pergunta:</label>
              <input
                type="text"
                name="question"
                onChange={formik.handleChange}
                value={formik.values.question}
              />
            </div>

            <div className={S.questionContainerAnswers}>
              <label>Respostas:</label>
              <input
                type="text"
                name="answer1"
                onChange={formik.handleChange}
                value={formik.values.answer1}
              />
              <input
                type="text"
                name="answer2"
                onChange={formik.handleChange}
                value={formik.values.answer2}
              />
              <input
                type="text"
                name="answer3"
                onChange={formik.handleChange}
                value={formik.values.answer3}
              />
              <input
                type="text"
                name="answer4"
                onChange={formik.handleChange}
                value={formik.values.answer4}
              />
            </div>

            <div className={S.questionContainer}>
              <label>Resposta correta:</label>
              <input
                type="text"
                name="correctAnswer"
                onChange={formik.handleChange}
                value={formik.values.correctAnswer}
              />
            </div>

            <div className={S.buttons}>
              <button type="submit">Enviar</button>

              <Link to="/">
                <button className={S.navigationBtn}>Retornar ao início</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
