// import styled, { keyframes } from "styled-components"
import styled, { keyframes } from "styled-components"


import { Link } from "gatsby"


export const YearTimelineWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

`;

export const TimelineLinkWrapper = styled.span`
  padding: 0.5em;
  
`

const opacityAnimation = keyframes`
  0% { opacity: 0; }
  20% { opacity: 0; }
  40% { opacity: 0.3; }
  60% { opacity: 0.5; }
  80% { opacity: 0.9; }
  100% { opacity: 1; }
`

export const TimelineLink = styled(Link)`
  color: var(--inactiveYearLink);
  font-family: Digital, cursive;
  /* font-size: 1.8em; */
  font-size: 1.2em;
  text-decoration: none;
  :hover {

    color: var(--activeYearLink);
    animation: ${opacityAnimation} 0.375s infinite;

  }
`


export const TimelineLinkActive = styled(TimelineLink)`
  color: var(--activeYearLink);
  /* font-size: 5em; */
  font-size: 2em;
  /* ::before {
    content: "(";
  };
  ::after {
    content: ")"
  } */
`
