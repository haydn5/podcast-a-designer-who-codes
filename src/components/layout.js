/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Image } from "react-bootstrap";
import podcastArtwork from "../images/a-designer-who-codes-podcast.jpg"
// import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-h5-audio-player/lib/styles.css';
import "../css/custom.css"
// import CloseScreen from "../pages/test"


const Layout = ({ children }) => {


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="featured-audio">
      Featured Audio
    </div>
    <Container>
      <Row>
        <Col lg={4}>
          <p><Image src={podcastArtwork} alt={data.site.siteMetadata.title} fluid rounded /></p>
        </Col>
        <Col lg={8}>
          <main className="scroll-me">{children}</main>
        </Col>
      </Row>
    </Container>
      
      <div>
        
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        {/* <CloseScreen /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
