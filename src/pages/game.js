import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Game = ({ location }) => {
      return (
            <Layout>
                  <SEO title="Typing Game" />
                  <h1>Game page</h1>
                  <p>
                        Game started in <strong>{location.state ? location.state.gameSettings.mode : 'Timed'}</strong> mode, <strong>{location.state ? location.state.gameSettings.type : 'Text'}</strong> type and <strong>{location.state ? location.state.gameSettings.duration : 'Long'}</strong> duration.
                  </p>
                  <Link to="/" className="btn">Go back to the homepage</Link>
            </Layout>
      )
}

export default Game
