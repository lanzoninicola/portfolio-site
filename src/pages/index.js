import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      graphCmsSiteContent {
        stage
        title
        subtitle
        siteMap {
          sitePageSection
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
