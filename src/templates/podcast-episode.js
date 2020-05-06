import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { Container } from "react-bootstrap";
import SEO from "../components/seo"
import AudioPlayer from 'react-h5-audio-player';
export default function PodcastEpisode({ data }) {
  const podcast = data.buzzsproutPodcastEpisode
  return (
    <Layout>
      <SEO title={podcast.title}  />
      <Container className="singleCol">
        <h1>{podcast.title}</h1>
        <p>
        <AudioPlayer
                src={podcast.audio_url}
                layout="horizontal-reverse"
                customAdditionalControls={[]}
                />
        </p>
        <div>
          <div dangerouslySetInnerHTML={{ __html: podcast.description }} />
        </div>
      </Container>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    buzzsproutPodcastEpisode(slug: {eq: $slug}) {
        slug
        title
        description
        audio_url
        episode_number
      }
  }
`
