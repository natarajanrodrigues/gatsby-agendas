import React from "react"
import Letreiro from "../../components/Letreiro"
import * as S from "./styled"


const IndexContext = () => {
  return (
    <S.IndexLayout>
      <S.FundoTunel>
        <Letreiro/>
          <S.StartLink
            to="/sousa/2007"
          >
            Iniciar Viagem
          </S.StartLink>
      </S.FundoTunel>
    </S.IndexLayout>
  )
}

export default IndexContext;