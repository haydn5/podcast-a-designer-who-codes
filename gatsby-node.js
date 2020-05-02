exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allBuzzsproutPodcastEpisode {
          edges {
            node {
                slug
            }
          }
        }
      }
    `)
    data.allBuzzsproutPodcastEpisode.edges.forEach(edge => {
      const slug = edge.node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/podcast-episode.js`),
        context: { slug: slug },
      })
    })
  }