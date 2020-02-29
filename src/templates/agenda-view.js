import React from "react"
import { graphql } from "gatsby"



const AgendaView = ({ data, pageContext }) => {
  
  // let pdfAgenda = data.allFile.edges[0].node.publicURL;
  // let pdfAgenda = '/agendas/sousa-2009-01.pdf';
  // pdfAgenda = pdfAgenda.split('false')[0];
  const pdfAgenda = `/agendas/${data.allFile.edges[0].node.name}.pdf`;
  

  return (
    <>
      <div style={{overflow:'scroll', width: '80vw', height:'90vh', border: "1px solid black"}}>
        {/* <embed src={`${pdfAgenda}#toolbar=0`}  width="100%" height="100%"></embed>   */}
        <object data={`${pdfAgenda}#toolbar=0`} type="application/pdf" width="100%" height="100%">
          Agenda CCBNB
        </object>  
      </div>  
    </>
  )
}

export const query = graphql`
  query AgendaView($name: String!) {
    allFile(filter: {name: {eq: $name}, extension: {eq: "pdf"}}) {
      edges {
        node {
          name
          base
          id
          extension
          publicURL
          relativePath
        }
      }
    }
  }
`

export default AgendaView
