import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({title, description, keywords, image})=> {
  const seo = {
      title: title,
      description: description,
      image: image,
      keywords: keywords,
  }
  return (
      <div>
          <Helmet>
              <title>{seo.title}</title>
              <meta name="image" content={seo.image} />
              <meta name="description" content={seo.description} />
              <meta name="keywords" content={seo.keywords} />
              <meta name="robots" content="index,follow" />
              <html lang="en"/>
          </Helmet>
      </div>
  ) 
}
export default SEO