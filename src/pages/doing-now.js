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
            <div className="content"></div>
            {posts
              .map(( {node: post} ) => {
                console.log('post', post)
                return (
                  <div>
                    {post.frontmatter.title}
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
