import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import AudioPlayer from 'react-h5-audio-player';
export default function PodcastEpisode({ data }) {
  const podcast = data.buzzsproutPodcastEpisode
  return (
    <Layout>
      <div>
        <h1>{podcast.title}</h1>
        <div>
        <AudioPlayer
                src={podcast.audio_url}
                layout="horizontal-reverse"
                customAdditionalControls={[]}
                />
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: podcast.description }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    buzzsproutPodcastEpisode {
        slug
        title
        description
        audio_url
      }
  }
`