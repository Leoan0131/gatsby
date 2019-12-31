import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ bkgd, children }) => {
    const data = useStaticQuery(
    graphql`
      query {
        homebkgd: file(relativePath: { eq: "homebkgd.jpg" }) {
          childImageSharp {
            fluid(quality: 100,maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const {
    homebkgd,
  } = data


  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    homebkgd.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={bkgd}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
        { children }
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(BackgroundSection)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default StyledMultiBackground