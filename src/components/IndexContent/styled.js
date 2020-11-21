import React from "react"
import styled, { keyframes } from "styled-components"
import GlobalStyles from "../../styles/global"
import { Link } from "gatsby"



const IndexWrapper = styled.main`
  background: var(--background);
  min-height: 100vh;
  min-width: 100%;
`

const pulseAnimation = keyframes`
  0% {
    transform: translate3d(-3px, 3px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`


export const StartLink = styled(Link)`
  color: white;
  font-family: Digital, cursive;
  padding: 1rem;
  margin: 2rem 20rem;
  background-color: red;
  font-size: 2rem;
  text-decoration: none;

  :hover {
    animation-name: ${pulseAnimation};
    animation-duration:.65s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    /* animation-fill-mode: forwards; */
  }

  :active {
    transform: translate3d(-3px, 3px, 0);
  }
`

export const IndexLayout = ({ children }) => {
  return (
    <IndexWrapper>
      <GlobalStyles />
      {children}
    </IndexWrapper>
  )
}

export const FundoTunel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(circle, var(--background2) 30%, purple 50%, #16202c 100%);
  height: 100vh;

`



