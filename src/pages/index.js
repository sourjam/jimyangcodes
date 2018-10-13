import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="greeting">
                <div className="about-image" style={{backgroundImage: 'url(../img/jimyangcodes.jpg)'}} />
                <h1 className="has-text-weight-bold is-size-2">Hey there!</h1>
              </div>

            </div>
            {posts
              .map(({ node: post }) => {
                return (
                  <div key={post.id}>
                    <HTMLContent content={post.html} />
                  </div>
                )


                // return (
                //   <div
                //     className="content"
                //     style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                //     key={post.id}
                //   >
                //     <p>
                //       <Link className="has-text-primary" to={post.fields.slug}>
                //         {post.frontmatter.title}
                //       </Link>
                //       <span> &bull; </span>
                //       <small>{post.frontmatter.date}</small>
                //     </p>
                //     <p>
                //       { post.html }
                //       <br />
                //       <br />
                //
                //     </p>
                //   </div>
                // )
              })}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "about-page" } }}
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
