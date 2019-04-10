import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
      <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>Typing Game</h1>
            <div className="settings">
                  <select className="btn">
                        <option>Game Mode</option>
                        <option>Timed</option>
                        <option>Not timed</option>
                  </select>
                  <select className="btn">
                        <option>Text</option>
                        <option>Long</option>
                        <option>Short</option>
                  </select>
                  <select className="btn">
                        <option>Words</option>
                        <option>Simple</option>
                        <option>Complex</option>
                  </select>
                  <Link to="/game" className="btn">Play</Link>
            </div>
      </Layout>
)

export default IndexPage
