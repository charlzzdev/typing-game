import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dropdown from "../components/dropdown"

const IndexPage = () => {
      const [gameSettings, setGameSettings] = useState({
            mode: 'Timed',
            type: 'Text',
            duration: '1 minute'
      });

      return (
            <Layout>
                  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                  <h1>Typing Game</h1>
                  <div className="settings">
                        <Dropdown
                              label={'mode'}
                              options={['Timed', 'Practice']}
                              gameSettings={gameSettings}
                              setGameSettings={setGameSettings}
                        />
                        <Dropdown
                              label={'type'}
                              options={['Text', 'Words']}
                              gameSettings={gameSettings}
                              setGameSettings={setGameSettings}
                        />
                        <Dropdown
                              label={'duration'}
                              options={['1 minute', '5 minutes']}
                              gameSettings={gameSettings}
                              setGameSettings={setGameSettings}
                        />
                        <Link to="/game" className="btn" state={{ gameSettings }}>Play</Link>
                  </div>
            </Layout>
      )
}

export default IndexPage
