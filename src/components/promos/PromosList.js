import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Promo = () => {
  const data = useStaticQuery(graphql`
    query {
      promos: allPromosJson(filter: { free: { eq: "yes" } }) {
        edges {
          node {
            id
            free
            slug
            title
            src {
              childImageSharp {
                fluid(quality: 90, maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const promos = data.promos.edges
  return (
    <PromoWrapper>
      {promos.map(({ node }, index) => {
        return (
          <div className="promo" key={index}>
            <AniLink className="link" fade to={`/promos/${node.slug}`}>
              <Img className="Img" fluid={node.src.childImageSharp.fluid} />
            </AniLink>
            <div className="recipe-title">
              <AniLink fade to={`/promos/${node.slug}`}>
                <h4>{node.title}</h4>
              </AniLink>
            </div>
          </div>
        )
      })}
    </PromoWrapper>
  )
}

const PromoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .promo {
    flex-basis: 43%;
    margin: 0.5rem;
    position: relative;
  }
  .recipe-title {
    position: absolute;
    top: 10px;
    left: 20px;
    h4 {
      color: #ffffff;
      font-size: 4rem;
      line-height: 3.5rem;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      transition: 0.2s ease-in-out;
      &:hover {
        color: var(--mainColor);
      }
    }
  }
  p {
    color: var(--darkGray);
    line-height: 1.2rem;
    margin: 0.1rem 0rem 0.5rem 0rem;
  }
  h4 {
    font-family: "Poppins";
    color: var(--darkGray);
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
    letter-spacing: 0rem;
  }
  .Img {
    height: 400px;
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    .promo {
      flex-basis: 100%;
    }
  }
`

export default Promo
