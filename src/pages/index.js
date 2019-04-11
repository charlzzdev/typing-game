import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dropdown from "../components/dropdown"

const IndexPage = () => (
      <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>Typing Game</h1>
            <div className="settings">
                  <Dropdown label={'Mode'} options={['Timed', 'Not Timed']} />
                  <Dropdown label={'Type'} options={['Text', 'Words']} />
                  <Dropdown label={'Duration'} options={['Long', 'Short']} />
                  <Link to="/game" className="btn">Play</Link>
            </div>
      </Layout>
)

export default IndexPage
