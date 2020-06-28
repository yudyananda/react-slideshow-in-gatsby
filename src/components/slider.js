import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import { Fade } from 'react-slideshow-image'

const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slider = () => {
    
    const data = useStaticQuery(graphql `
        query {
            allFile(
                sort: { fields: name, order: DESC }
                filter: { relativeDirectory: { eq: "slider" } }
            ) {
                edges {
                    node {
                        id
                        name
                        childImageSharp {
                            fluid(maxWidth: 1200, maxHeight: 585, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                ...GatsbyImageSharpFluidLimitPresentationSize

                            }
                        }
                    }
                }
            }
        }        
    `)
    
    return (
        <div className="slide-container front-slider pointer-events-none">
            <Fade {...fadeProperties}>
                {data.allFile.edges.map(image => (
                    <div className="each-fade">
                        <div className="image-container select-none">
                            <Img className="rounded" alt="first bro" key={image.node.name} backgroundColor fluid={image.node.childImageSharp.fluid} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slider