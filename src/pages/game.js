import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from '../components/timer'
import Words from '../components/words'

const Game = ({ location }) => {
      const [score, setScore] = useState(0);
      const [gameActive, setGameActive] = useState(true);

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
                  <header className="game-header">
                        <Timer mode={gameSettings.mode} duration={gameSettings.duration} score={score} setGameActive={setGameActive} />
                        <div className="score">Score: {score}</div>
                  </header>
                  {
                        gameActive ? <Words score={score} setScore={setScore} /> : (
                              <div className="endGameResults">
                                    <h1>Congratulations!</h1>
                                    <p>You've reached a score of <strong style={{ color: '#FF8E53' }}>{score}</strong> in {gameSettings.duration}.</p>
                                    <Link to="/" className="btn">Go back to the homepage</Link>
                              </div>
                        )
                  }
                  <Link to="/" className="btn">Go back to the homepage</Link>
            </Layout>
      )
}

export default Game
