/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`);

const readPDF = require('read-pdf-as-png')
// const fs = require('fs')

const path = require(`path`)

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNode, createParentChildLink, createNodeField } = actions 
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.mediaType === `application/pdf`) {

    //creating slug and metadata
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const metadata = {};
    
    const infos = node.name.split('-');
    metadata.name = node.name
    metadata.ccbnb = infos[0]
    metadata.ano = infos[1]
    metadata.mes = infos[2]
    metadata.downloadPath = `../../pdf/${node.relativePath}`
    // metadata.coverPath = `/pdf/${node.name}.png`
    metadata.coverPath = `/${node.name}.png`
    
    // metadata.coverPath = path()`${node.name}.png`
    
    metadata.path = node.relativePath
    metadata.date = new Date(`${metadata.mes}-01-${metadata.ano}`)


    // creating cover file (getting the page 0 from pdf file)
    const stream = readPDF(node.absolutePath)
    stream.on('error', (err) => {
      console.err("err: ", err)
    })
    stream.on('data', (data) => {
      // console.log("TCL: exports.onCreateNode -> data", data)
      // fs.writeFile(`${node.dir}/capas/`, data, () => console.log('ok'))
    })
    // finish creating cover

    

    const agendaNode = {
      ...metadata,
      slug: slug, 
      id: `${node.id} >>> ${node.extension}`,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: node.internal.contentDigest,
        type: 'agenda'
      }
    };
    

    createNode(agendaNode);
    createParentChildLink({ parent: node, child: agendaNode });


  }
}


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allAgenda(sort: {fields: date, order: DESC}) {
//         group(field: ano) {
//           fieldValue
//           totalCount
//           nodes {
//             name
//             mes
//             ano
//           }
//         }
//         edges {
//           node {
//             slug
//             name
//             ano
//             ccbnb
//             downloadPath
//             mes
//           }
//         }
//       }
//     }
//   `).then(async result => {
//     const agendas = result.data.allAgenda.edges

//     const anos = await result.data.allAgenda.group.map( x => x.fieldValue )
//     console.log("TCL: const", anos)

//     // agendas.forEach(({ node, next, previous }) => {
//     //   createPage({
//     //     path: node.slug,
//     //     component: path.resolve(`./src/templates/blog-post.js`),
//     //     context: {
//     //       // Data passed to context is available
//     //       // in page queries as GraphQL variables.
//     //       slug: node.slug,
//     //     },
//     //   })
//     // })

//     createPage({
//       path: "/",
//       component: path.resolve(`./src/templates/agenda-list.js`),
//       context: {
//         anos: anos
//       }
//     })
    
//   })
// }


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allAgenda(sort: {fields: date, order: DESC}) {
        group(field: ano) {
          fieldValue
          totalCount
          nodes {
            name
            mes
            ano
          }
        }
        edges {
          node {
            slug
            name
            ano
            ccbnb
            downloadPath
            mes
          }
        }
      }
    }
  `).then(async result => {
    console.log('COMEÇANDO PAGINAS')

    //creating timeline pages
    const anos = await result.data.allAgenda.group.map( (ano, index) => {
      const pathname = index === 0 ?  "/" : `/sousa/${index}` 
      return ({ ano: ano.fieldValue, pathname: pathname })
    })

    await anos.forEach( item => {  
      console.log('FAZEANDO PAGINA')
      createPage({
        path: item.pathname,
        component: path.resolve(`./src/templates/agenda-list.js`),
        context: {
          anos: anos,
          ano: item.ano.toString(),
        }
      })
    })

    console.log('TERMINOU PAGINAS')
    
    //creating agendas
    const agendas = result.data.allAgenda.edges
    
    agendas.map((agenda) => {
        console.log('criando página da agenda')
        createPage({
          path: `${agenda.node.slug}`,
          component: path.resolve(`./src/templates/agenda-view.js`),
          context: {
            name: agenda.node.name
          }
        })
      }
    )
    
    
  })
}


exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    
    agenda: {
      // Add a field to an existing type by providing a field config.
      // Note that added fields will not be available in the input filter
      // when no type definitions are provided wth `createTypes`.
      capa: {
        type: [`File`],
        resolve(source, args, context, info) {
          // We use an author's `email` as foreign key in `BlogJson.authors`
          const fieldValue = source.name

          const capas = context.nodeModel.getAllNodes({
            type: `File`,
          })
          
          return capas.filter(img => 
             img.ext = '.png' && img.name === fieldValue
          ) 
        },
      },
    },
    
  })
}
