import React from "react";
import { Link } from "react-router-dom";

import S from './styles.module.scss'

export function HomeScreen() {

  return (
    <div className={S.container}>
      <div className={S.card}>
        <h1>Bem-vindo ao Quiz!</h1>

        <div className={S.navigationBtns}>
          <Link to='/quiz'>
            <button>Iniciar Quiz</button>
          </Link>
          <Link to='/add-question'>
            <button>Adicionar Pergunta</button>
          </Link>
        </div>
      </div>
    </div>
  )

}

