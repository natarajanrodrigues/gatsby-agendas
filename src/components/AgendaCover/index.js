// import React from 'react';
// import Img from 'gatsby-image'
// import { useStaticQuery, graphql } from 'gatsby'

// const AgendaCover = ({ relativePath }) => {
  
//   const path = `${relativePath}.png`
//   console.log("TCL: AgendaCover -> path", path)

//   const { agendaCover } = useStaticQuery(
    
//     graphql`
//       query {
//         agendaCover: file(relativePath: { eq: "sousa-2019-01.png" }) {
//           childImageSharp {
//             fluid (maxWidth: 100) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     `
//   )

//   return (
//     <div style={{maxWidth: '10em'}}>
//       <Img  fluid={agendaCover.childImageSharp.fluid} />
//     </div>
//   );
// }

// export default AgendaCover






// import React from 'react';
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'

// const AgendaCover = ({ relativePath, data}) => {
// console.log("TCL: AgendaCover -> relativePath", relativePath)
  
//   console.log("TCL: AgendaCover -> data", props.data)
  

//   return (
//     <div style={{maxWidth: '10em'}}>
//       {/* <Img  fluid={data.agendaCover.childImageSharp.fluid} /> */}
//     </div>
//   );
// }

// export const query = graphql`
//   query ($relativePath: String!) {
//     file (relativePath: { eq: $relativePath }) {
//       childImageSharp {
//         fluid (maxWidth: 100) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

// export default AgendaCover



// import React from 'react';
// import Img from 'gatsby-image'

// const AgendaCover = ({ capa }) => {
  
//   return (
//     <div style={{maxWidth: '15em'}}>
//       { 
//         !!capa && !!capa.childImageSharp && !!capa.childImageSharp.fluid && 
//           <Img fluid={capa.childImageSharp.fluid} style={{maxWidth: '10em'}}/>
//       }
      
//     </div>
//   );
// }

// export default AgendaCover



import React from 'react';
import Img from 'gatsby-image'

const AgendaCover = ({ capa }) => {
  
  return (
    <div style={{maxWidth: '30vw'}}>
      { 
        !!capa && !!capa.childImageSharp && !!capa.childImageSharp.fluid && 
        <Img fluid={capa.childImageSharp.fluid} style={{maxWidth: '400px'}} />
      }
      
    </div>
  );
}

export default AgendaCover