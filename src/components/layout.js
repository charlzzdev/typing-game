import React from "react"
import PropTypes from "prop-types"
import PageTransition from 'gatsby-plugin-page-transitions'

import "./layout.css"

const Layout = ({ children }) => (
      <PageTransition>
            <div className="content">
                  {children}
            </div>
      </PageTransition>
)

Layout.propTypes = {
      children: PropTypes.node.isRequired,
}

export default Layout
