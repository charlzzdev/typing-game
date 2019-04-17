import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from '../components/timer'
import Words from '../components/words'

const Game = ({ location }) => {
      const [score, setScore] = useState(0);

      if (!location.state) {
            location.state = {
                  gameSettings: {
                        mode: 'Timed',
                        type: 'Text',
                        duration: '1 minute'
                  }
            }
      }
      const gameSettings = location.state.gameSettings;

      return (
            <Layout>
                  <SEO title="Typing Game" />
                  <h1>Game page</h1>
                  <Timer mode={gameSettings.mode} duration={gameSettings.duration} />
                  <div className="score">Score: {score}</div>
                  <Words score={score} setScore={setScore} />
                  <Link to="/" className="btn">Go back to the homepage</Link>
            </Layout>
      )
}

export default Game
