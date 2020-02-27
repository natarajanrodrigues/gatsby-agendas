// import React from "react"
// import { graphql } from "gatsby"



// const AgendaView = ({ data, pageContext }) => {
//   console.log("TCL: AgendaView -> data", data)
  
//   // const fileName = `../${data.AllAgenda.edges.node.name}.pdf`
//   const fileName = `../pdf/sousa-2009-01.pdf`
//   console.log("TCL: AgendaView -> fileName", fileName)

//   return (
//     <>
//       <div style={{overflow:'scroll', width: '80vw', height:'90vh', border: "1px solid black"}}>
//         <embed src={fileName}  width="100%" height="100%"></embed>  
//       </div>  
//     </>
//   )
// }

// export const query = graphql`
//   query AgendaViewQuery($slug: String!) {
//     allAgenda(filter: {slug: {eq: $slug}} ) {
//       edges {
//         node {
//           name
//           date (locale: "pt-br", formatString: "MMMM [de] YYYY")
//           downloadPath
//         }
//       }
//     }
//   }
// `

// export default AgendaView






import React from "react"
import { graphql } from "gatsby"
import { PDFReader, MobilePDFReader } from 'reactjs-pdf-reader';



const AgendaView = ({ data, pageContext }) => {
  
  let pdfAgenda = data.allFile.edges[0].node.publicURL;
  // pdfAgenda = pdfAgenda.split('false')[0];
  // const pdfAgenda = `/pdf/${data.allFile.edges[0].node.name}.pdf`;
  // const pdfAgenda = '/static/sousa-2007-07-c73981cf06c64e9f679f8f3ae3bfbc77.pdf'
  console.log("TCL: AgendaView -> pdfAgenda", pdfAgenda)
  

  return (
    <>
      {/* <div style={{overflow:'scroll', width: '80vw', height:'90vh', border: "1px solid black"}}>
        <embed src={pdfAgenda}  width="100%" height="100%"></embed>  
      </div>   */}

      <div style={{overflow:'scroll', width: '80vw', height:'100vh', border: "1px solid black"}}>
        <PDFReader scale="1.5" showAllPage url={pdfAgenda} />  
        {/* <MobilePDFReader scale="1" isShowHeader={false} showAllPage url={pdfAgenda} />   */}
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
