import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Timer from '../components/timer'
import Words from '../components/words'
import Keyboard from '../components/keyboard'

const Game = ({ location }) => {
      const [score, setScore] = useState(0);
      const [streak, setStreak] = useState(1);
      const [gameActive, setGameActive] = useState(true);
      const [wordEnd, setWordEnd] = useState(false);
      const [keyboardActive, setKeyboardActive] = useState(typeof window !== 'undefined' && window.innerWidth < 800 ? true : false);
      const [pressedKey, setPressedKey] = useState({});

      if (!location.state) {
            location.state = {
                  gameSettings: {
                        mode: 'Timed',
                        type: 'Sentences',
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
                        <div className="score">
                              Score: {score}
                              {wordEnd && <div className="streak">+{streak - 1}</div>}
                        </div>
                  </header>
                  {
                        gameActive ? <Words
                              type={gameSettings.type}
                              score={score}
                              setScore={setScore}
                              streak={streak}
                              setStreak={setStreak}
                              setWordEnd={setWordEnd}
                              keyboardActive={keyboardActive}
                              setKeyboardActive={setKeyboardActive}
                              pressedKey={pressedKey}
                        /> : <div className="endGameResults">
                                    <h1>Congratulations!</h1>
                                    <p>You've reached a score of <strong style={{ color: '#FF8E53' }}>{score}</strong> in {gameSettings.duration} of writing {gameSettings.type.toLowerCase()}.</p>
                                    <Link to="/" className="btn">Go back to the homepage</Link>
                              </div>
                  }
                  <Link to="/" className="btn">Go back to the homepage</Link>
                  <Keyboard active={keyboardActive} setPressedKey={setPressedKey} gameType={gameSettings.type} />
                  <svg xmlns="https://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffffd3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`activate-keyboard ${keyboardActive ? 'active' : 'inactive'}`} onClick={() => setKeyboardActive(!keyboardActive)}><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" /></svg>
            </Layout>
      )
}

export default Game
