import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container } from "react-bootstrap";


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="A Designer Who Codes Podcast" />
    <Container>
      <h1>Hi people</h1>
    
    
    {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
    <span key={node.id}>
        <h2>
          <Link to={node.slug}>
          <small>Episode #{node.episode_number}</small><br />
        {node.title}
        </Link>
        <p>Released on {node.published_at}</p>
        </h2>
        <p><small>Episode Summary</small></p>
        <p>{node.summary}</p>

    </span>
    ))}
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allBuzzsproutPodcastEpisode {
      edges {
        node {
          episode_number
          slug
          summary
          title
          total_plays
          id
          published_at(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  `

  