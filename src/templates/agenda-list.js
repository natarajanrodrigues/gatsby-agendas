// import React from "react"
// import { graphql } from "gatsby"
// import AgendaCover from "../components/AgendaCover"
// import { Link } from "gatsby"


// const AgendaList = ({ data, pageContext }) => {
  
//   const agendaList = data.allAgenda.edges
//   const { anos, ano }  = pageContext

//   return (
//     <>
//       <div style={{padding: '2em'}}>
//         { 
//           anos.map( (item) => {
            
//             return (
//               <span style={{padding: '0.5em'}} key={`ano-key-${item.ano}`}>
//                 <Link to={item.pathname}>
//                 { item.ano === ano && '(' }
//                 { item.ano }
//                 { item.ano === ano && ')' }
//                 </Link>
//               </span>
//             )

//           }) 
          
//         }
        
//       </div>
      
//       <ul>
//           {agendaList.map(
//             ({
//               node: {
//                 slug,
                
//                 capa,

//                 date
                
//               },
//             }) =>  {
//               console.log("TCL: AgendaList -> capa", capa)
//               const cover = capa.filter(cover => cover.childImageSharp != null );

//               return (
//                 <li key={`id-${slug}`}>
//                   <div>{date}</div>
//                   {/* <img src={`src/pdf/${name}.png`} alt={`capa de ${name}`} /> */}
//                   {/* <AgendaCover capa={capa[0]} /> */}
//                   <Link to={slug} >
//                   <AgendaCover capa={cover[0]} />
//                   </Link>
//                 </li>
//               )
//             }
//           )}
//       </ul>
//     </>
//   )
// }

// export const query = graphql`
//   query AgendaList($ano: Date!) {
//     allAgenda(sort: {fields: date, order: ASC}, filter: {ano: {eq: $ano}} ) {
//       edges {
//         node {
//           slug
//           name
//           date (locale: "pt-br", formatString: "MMMM [de] YYYY")
//           capa  {
//             childImageSharp {
//               fluid (maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default AgendaList



import React from "react"
import { graphql } from "gatsby"
import AgendaCover from "../components/AgendaCover"
import { Link } from "gatsby"



function AgendaList ({ data, pageContext }){
  
  
  const agendaList = data.allAgenda.edges
  const { anos, ano }  = pageContext
  
  
  return (
    <>
      <div style={{padding: '2em'}}>
        { 
          anos.map( (item) => {
            
            return (
              <span style={{padding: '0.5em'}} key={`ano-key-${item.ano}`}>
                <Link to={item.pathname}>
                { item.ano === ano && '(' }
                { item.ano }
                { item.ano === ano && ')' }
                </Link>
              </span>
            )

          }) 
          
        }
        
      </div>

      <div style={{display: 'flex', height: '90vh', justifyContent: 'center', flexWrap: 'wrap', overflowX: 'scroll', paddingBottom: 50}}>
        
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
        

      
    </>
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
