import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Game = () => (
      <Layout>
            <SEO title="Typing Game" />
            <h1>Game page</h1>
            <Link to="/" className="btn">Go back to the homepage</Link>
      </Layout>
)

export default Game
