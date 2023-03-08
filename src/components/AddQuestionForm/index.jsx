import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

import S from './styles.module.scss'

export function AddQuestionForm () {
  const formik = useFormik({
    initialValues: {id: '', question: '', answers: '', correctAnswer: ''},
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
            <label>ID</label>
            <input type="text" name="id" onChange={formik.handleChange} value={formik.values.id}/>

            <label>Pergunta</label>
            <input type="text" name="question" onChange={formik.handleChange} value={formik.values.question}/>

            <label>Respostas</label>
            <input type="text" name="answers" onChange={formik.handleChange} value={formik.values.answers}/>
            <input type="text" name="answers" onChange={formik.handleChange} value={formik.values.answers}/>
            <input type="text" name="answers" onChange={formik.handleChange} value={formik.values.answers}/>
            <input type="text" name="answers" onChange={formik.handleChange} value={formik.values.answers}/>

            <label>Resposta correta</label>
            <input type="text" name="correctAnswer" onChange={formik.handleChange} value={formik.values.correctAnswer}/>

            <button type="submit">Enviar</button>
          </form>
          
        </div>
      </div>
    </div>
  )

}
