import React from "react"
import Header from './Header'
import Footer from './Footer'

import "../assets/index.scss"

const Layout = ({ location, title, children }) => {

  return (
    <div className="wrap-site">
      <Header location={location} title={title} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
