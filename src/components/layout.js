import * as React from "react"
import { Link } from "gatsby"

import Navigation from "./frame/navigation"
import HeroImage from "./landingPage/heroImage"
import SectionOne from "./landingPage/sectionOne"
import SectionTwo from "./landingPage/sectionTwo"
import Pricing from "./landingPage/pricing"
import WaveDivider from "./landingPage/waveDivider"
import CallToAction from "./landingPage/callToAction"
import Footer from "./frame/footer"

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
      <Pricing />
      <WaveDivider />
      <CallToAction />
      <Footer />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
    </body>
  )
}

export default Layout
