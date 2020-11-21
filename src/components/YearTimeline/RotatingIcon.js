import styled, { keyframes } from "styled-components"


// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

// export const RotatingLink = styled.div`
//   color: violet;
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
  
// `


const cssAnimation = keyframes`
  0% {
    transform: translate3d(42px, -62px, 2rem);
  }
  50% {
    transform:  translate3d(0, -10%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0) ;
  }
`

export const RotatingLink = styled.div`
  color: violet;
  display: inline-block;
  animation-name: ${cssAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  /* animation: ${cssAnimation} 2s linear 1; */
  
  /* padding: 2rem 1rem; */
  font-size: 1.2rem;
  
`


