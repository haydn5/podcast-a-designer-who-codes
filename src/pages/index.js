import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container } from "react-bootstrap";


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
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
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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

  