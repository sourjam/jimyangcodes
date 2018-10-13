import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'

export const WebDevPageTemplate = ({
  title,
  heading,
  description,
  html
}) => (
  <section className="web-dev-section">
    <div className="container">
      <h1>{title}</h1>
      <HTMLContent content={html}/>
    </div>
  </section>
)

WebDevPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const WebDevPage = ({data}) => {
  const { frontmatter } = data.markdownRemark
  const { html } = data.markdownRemark

  return (
    <Layout>
      <WebDevPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        html={html}
      />
    </Layout>
  )
}

WebDevPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WebDevPage

export const webDevPageQuery = graphql`
  query WebDevPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        description
      }
    }
  }
`
