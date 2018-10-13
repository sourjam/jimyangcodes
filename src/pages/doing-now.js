import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export default class DoingPage extends React.Component {
  render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>What I'm Doing Now</h1>
              <div>A brief list of habits that I'm currently subscribed to.</div>
            </div>
            {posts
              .map(( {node: post} ) => {
                console.log('post', post)
                return (
                  <div key={post.id}>
                    <h3>{post.frontmatter.title}</h3>
                    <HTMLContent content={post.html} />
                  </div>
                )
              })
            }
          </div>
        </section>
      </Layout>
    )
  }
}

DoingPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query DoingQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "doing" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
