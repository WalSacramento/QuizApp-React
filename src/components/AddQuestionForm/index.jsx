import React, { useState } from 'react'
import { Link } from "react-router-dom";

import S from './styles.module.scss'

export function AddQuestionForm ({ setQuestions }) {
  const initialState = {
    id: '',
    question: '',
    answers: ['', '', '', ''],
    correctAnswer:'',
  }

  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    
    if (name === 'answers') {
      const newAnswers = [...formData.answers]
      const index = Number(event.target.id)
      newAnswers[index] = value;
      setFormData({...formData, newAnswers})
    } else {
      setFormData({...formData, [name]: value})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefaut()
    setQuestions((questions) => [
      ...questions,
      {
        ...formData,
        id: questions.length + 1,
      },
    ])
    setFormData(initialState)
  }

  return (
    <div>
      <form className={S.addQuestionForm} onSubmit={handleSubmit}>
      <div className={S.formGroup}>
        <label htmlFor='question'>Pergunta:</label>
        <input 
          type='text'
          name='question'
          value={formData.question}
          onChange={handleInputChange}
          required 
          />
      </div>
      <div className={S.formGroup}>
        <label htmlFor='answers'>Respostas:</label>
        {formData.answers.map((answer, index) => (
          <input 
            key={index} 
            id={index}
            type='text'
            name='answers'
            value={answer}
            onChange={handleInputChange}
            required
            />
        ))}
      </div>
      <div className={S.formGroup}>
        <label htmlFor='correctAnswer'>Resposta correta:</label>
        <select
          name='correctAnswer'
          value={formData.correctAnswer}
          onChange={handleInputChange}
          required >
            <option value="" disabled hidden>
            Selecione a resposta correta
          </option>
          {formData.answers.map((answer, index) => (
            <option key={index} value={answer}>
              {answer}
            </option>
          ))}
          </select>
      </div>
      <button type='submit'>Adicionar pergunta</button>

    </form>
      
    </div>
    
    
  )

}
