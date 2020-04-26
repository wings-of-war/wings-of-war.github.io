import React from "react"
import "./style.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()}, МСВ
      </div>
    </footer>
  )
}

export default Footer
