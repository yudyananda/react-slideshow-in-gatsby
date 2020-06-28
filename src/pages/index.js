import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { isBrowser } from '../components/util'

//import loadable from '@loadable/component'

//const Slider = loadable(() => import('../components/slider'))

import Slider from '../components/slider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        position: `relative`
      }} 
      className="slider">
      {isBrowser() && <Slider />}

      <div
        style={{
          padding: `3em`, background: `#fff`, position: `relative`, fontSize: `1.5rem`, position: `absolute`, top: `0`, bottom: `0`
        }} 
        className="overlay">
        just an overlay
      </div>

      <div 
        style={{
          padding: `3em`, background: `#fff`, position: `relative`, fontSize: `1.5rem`
        }}
        className="absolute">
        some element here
      </div>
    </div>
  </Layout>
)

export default IndexPage
