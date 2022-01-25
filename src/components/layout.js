import * as React from "react"
import { Link } from "gatsby"

import Navigation from "./landingPage/navigation"
import HeroImage from "./landingPage/heroImage"
import SectionOne from "./landingPage/sectionOne"
import SectionTwo from "./landingPage/sectionTwo"
import SectionThree from "./landingPage/sectionThree"
import Pricing from "./landingPage/pricing"
import WaveDivider from "./landingPage/waveDivider"
import CallToAction from "./landingPage/callToAction"
import Footer from "./landingPage/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <Navigation />
      <HeroImage />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Pricing />
      <WaveDivider />
      <CallToAction />
      <Footer />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </body>
  )
}

export default Layout
