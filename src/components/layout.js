import React from "react"
import "../assets/styles/index.scss"
import Footer from "./Footer"
import Header from "./Header"

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
