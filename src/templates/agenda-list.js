import React from "react"
import { graphql } from "gatsby"
import AgendaCover from "../components/AgendaCover"


import Layout from "../components/Layout"
import SEO from "../components/seo"
import YearTimeline from "../components/YearTimeline"

import { Link } from "gatsby"

function AgendaList ({ data, pageContext }){
  
  
  const agendaList = data.allAgenda.edges
  const { anos, ano }  = pageContext
  
  
  return (
    
    <Layout>
      <SEO title={`Ano ${ano}`} /> 

      <YearTimeline ano={ano} anos={anos} />

      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', overflowX: 'scroll', paddingBottom: 50}}>
        
          {agendaList.map(
            ({
              node: {
                slug,
                
                capa,

                date
                
              },
            }) =>  {
              
              const cover = capa.filter(cover => cover.childImageSharp != null );

              return (
                // <div key={`id-${slug}`} style={{margin: '1em', minWidth: '300px'}}>
                <div key={`id-${slug}`} style={{margin: '1em', minWidth: '18vw'}}>
                  <div>{date}</div>
                  <Link to={slug} >
                    <AgendaCover capa={cover[0]} />
                  </Link>
                </div>
              )
            }
          )}
          
      </div>      
    </Layout>
    
  )
}

export const query = graphql`
  query AgendaList($ano: Date!) {
    allAgenda(sort: {fields: date, order: ASC}, filter: {ano: {eq: $ano}} ) {
      edges {
        node {
          slug
          name
          date (locale: "pt-br", formatString: "MMMM [de] YYYY")
          capa  {
            childImageSharp {
              fluid (maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default AgendaList
