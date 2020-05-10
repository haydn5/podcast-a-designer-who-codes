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
      <ol className="episodes">

      
    {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
      <li key={node.id}>
        <Link to={node.slug} className="card-link">
         <div>
         <span>{node.published_at}</span>
          <h2 className="track-title">{node.title}</h2>
          <p>{node.summary}</p>
         </div>
        </Link>
        </li>
    ))}
    </ol>
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

  