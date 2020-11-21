import React from 'react'
import PropTypes from 'prop-types'
import * as S from "./styled"
import * as T from "./RotatingIcon"


const LinkAno = ({ to, ano }) => 
  <S.TimelineLink to={to}>
    {ano} 
  </S.TimelineLink>

const LinkAnoActive = ({ to, ano }) => 
  <S.TimelineLinkActive to={to} >
    {ano} 
    {/* <T.RotatingLink >T</T.RotatingLink> */}
  </S.TimelineLinkActive>


export default function YearTimeline({ ano, anos }) {
  return (
    <S.YearTimelineWrapper>

        <S.TimelineLink to="/">Início</S.TimelineLink>
      
        { 
          anos.map( (item) => {

            // const isSelected = item.ano === ano; 

            // const partlyActive = className => ({ isPartiallyCurrent }) => ({
            //   className: className + (isPartiallyCurrent ? ` active` : ``),
            // })
          
            // return (
              
            //   <S.TimelineLinkWrapper key={`ano-key-${item.ano}`}>
            //     <S.TimelineLink to={item.pathname} selected={isSelected} >
            //       { item.ano === ano && '(' }
            //       { item.ano }
            //       { item.ano === ano && ')' }
            //     </S.TimelineLink>
            //   </S.TimelineLinkWrapper>
              
            // )

            const isSelected = item.ano === ano; 
        
            const aLink = isSelected ? <LinkAnoActive ano={item.ano} to={item.pathname} /> : <LinkAno ano={item.ano} to={item.pathname} />
          
            return (
              
              <S.TimelineLinkWrapper key={`ano-key-${item.ano}`}>
                { aLink }
              </S.TimelineLinkWrapper>
              
            )

          }) 
          
        }
        
      </S.YearTimelineWrapper>
  );
}
 
YearTimeline.propTypes = {
  ano: PropTypes.string.isRequired,
  anos: PropTypes.array.isRequired
}
