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
    data.allBuzzsproutPodcastEpisode.edges.forEach(edges => {
      const slug = edges.node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/podcast-episode.js`),
        context: { slug: slug },
      })
    })
  }