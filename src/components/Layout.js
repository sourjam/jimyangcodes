import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import favicon from '../img/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jim Yang Codes"
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div className="gatsby-template-wrapper">
      <Navbar />
      <div className="gatsby-section-wrapper">{children}</div>
    </div>
  </div>
)

export default TemplateWrapper
