import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `)

  return (
    <div>
      <h1>Hello world</h1>
      <p>{`This is my ${data.site.siteMetadata.title}`}</p>
      <p>{data.site.siteMetadata.email}</p>
    </div>
  )
}
