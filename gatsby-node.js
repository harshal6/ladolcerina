const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      promos: allPromosJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.promos.edges.forEach(({ node }) => {
    createPage({
      path: `promos/${node.slug}`,
      component: path.resolve("./src/templates/promos-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
