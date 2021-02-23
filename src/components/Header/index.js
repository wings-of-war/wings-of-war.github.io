import { Link } from "gatsby"
import React from "react"
import classes from "./Header.module.scss"

const rootPath = `${__PATH_PREFIX__}/`

const Header = ({ location, title }) => {
  const isMainPage = location.pathname === rootPath

  const renderedMainPageHeader = (
    <h1 className={classes.mainTitle}>
      <Link className={classes.titleLink} to={`/`}>
        {title}
      </Link>
    </h1>
  )

  const renderedOtherPagesHeader = (
    <h3 className={classes.title}>
      <Link className={classes.titleLink} to={`/`} title="На главную">
        {`↩ ${title}`}
      </Link>
    </h3>
  )

  return (
    <header className={classes.header}>
      <div className="container">
        {isMainPage ? renderedMainPageHeader : renderedOtherPagesHeader}
      </div>
    </header>
  )
}

export default Header
