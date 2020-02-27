import React from "react"
import { graphql } from "gatsby"
import AgendaCover from "../components/AgendaCover"

const AgendaList = ({ data, pageContext }) => {
  
  const agendaList = data.allAgenda.edges
  const { anos }  = pageContext

  return (
    <>
      <ul>
      { anos.map( ano => <li key={`ano-key-${ano}`}>{ano}</li>) }
      </ul>
      
      <ul>
          {agendaList.map(
            ({
              node: {
                slug,
                name,
                capa,
                
                
              },
            }) =>  {
              const cover = capa.filter(cover => cover.childImageSharp != null );

              return (
                <li key={`id-${slug}`}>
                  <div>{slug} - {name}</div>
                  {/* <img src={`src/pdf/${name}.png`} alt={`capa de ${name}`} /> */}
                  {/* <AgendaCover capa={capa[0]} /> */}
                  <AgendaCover capa={cover[0]} />
                </li>
              )
            }
          )}
      </ul>
    </>
  )
}

export const query = graphql`
  query AgendaList {
    allAgenda(sort: {fields: date, order: DESC} ) {
      edges {
        node {
          slug
          name
          capa  {
            childImageSharp {
              fluid (maxWidth: 200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default AgendaList
