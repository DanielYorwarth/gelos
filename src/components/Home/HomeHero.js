import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const HomeHero = (props) => {
  
  // Get all images
  /* We need to query all images when we create a image conponent 
  that dynamically gets the image file via props because static query 
  cannot pass variables so we cannot parse the variable to the static query
  --- So we get all images and the .find() function to look over each image that we got back from the useStaticQuery() and
  get the image we are looking for */

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 19200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(props.image);
  });
  if (!image) {
    return null;
  }
  return (
    <BackgroundImage 
        tag="section" 
        className="homehero w-full bg-blue flex flex-wrap items-center justify-center px-2" 
        fluid={image.node.childImageSharp.fluid} 
    >
        <h1 className="text-4xl md:text-5xl text-white font-bold uppercase text-center" dangerouslySetInnerHTML={{__html: props.title}} />
    </BackgroundImage>
  )
}




export default HomeHero
