import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'

export const VersionPagePageTemplate = ({
  title,
  heading,
  description,
  html
}) => (
  <section className="version-section">
    <div className="container">
      <h1>{title}</h1>
      <HTMLContent content={html}/>
    </div>
  </section>
)

VersionPagePageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const VersionPagePage = ({data}) => {
  const { frontmatter } = data.markdownRemark
  const { html } = data.markdownRemark

  return (
    <Layout>
      <VersionPagePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        html={html}
      />
    </Layout>
  )
}

VersionPagePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VersionPagePage

export const versionPageQuery = graphql`
  query VersionPagePage($id: String!) {
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
