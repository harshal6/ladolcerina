import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Rina-Logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#ffffff`}
          >
            {children}
          </BackgroundImage>
          <p
            style={{
              fontSize: "12px",
              margin: "0 auto",
              color: "black",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Mostly healthy recipes inspired by my sweet and savory life.
          </p>
        </>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 200px;
`

export default StyledBackgroundSection