import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {HTMLContent} from '../components/Content'

export const FrontEndPageTemplate = ({
  title,
  heading,
  description,
  html
}) => (
  <section className="front-end-section">
    <div className="container">
      <h1>{title}</h1>
      <HTMLContent content={html}/>
    </div>
  </section>
)

FrontEndPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const FrontEndPage = ({data}) => {
  console.log('hi', data)
  // const { frontmatter } = data.data.markdownRemark
  //
  // return (
  //   <div>hi</div>
  // )
  const { frontmatter } = data.markdownRemark
  const { html } = data.markdownRemark

  return (
    <Layout>
      <FrontEndPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        html={html}
      />
    </Layout>
  )
}

FrontEndPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FrontEndPage


export const frontEndPageQuery = graphql`
  query FrontEndPage($id: String!) {
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
