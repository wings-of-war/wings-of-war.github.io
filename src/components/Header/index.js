import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../../utils/typography"
import "./style.scss"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
          title="На главную"
        >
          ↩ {title}
        </Link>
      </h3>
    )
  }

  return (
  <header className="header">
      <div className="container">
        {header}
      </div>
  </header>
  )
}

export default Header