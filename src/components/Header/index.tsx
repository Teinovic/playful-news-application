import React from "react"
import styles from "./style.module.scss"
import { Link } from "react-router-dom"
import { NavBar } from "../NavBarBelowHeader"

interface Props {
  withNavBarProp: boolean
  storiesUnderlined: boolean
  playgroundColor: boolean
  storyUnderlined: string
}

export const HeaderComponent: React.FC<Props> = ({
  withNavBarProp,
  storiesUnderlined,
  playgroundColor,
  storyUnderlined,
}) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: playgroundColor && "salmon" }}
    >
      <div className={styles.containerNav}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="viking logo"
              className={styles.siteLogo}
            />
          </Link>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListLi}>
              <Link
                to="/stories"
                style={{
                  textDecoration: "none",
                  borderBottom: storiesUnderlined && "white solid 2.5px",
                }}
              >
                <span className={styles.listAttribute}>Stories</span>
              </Link>
            </li>
            <li className={styles.navListLi}>
              <Link
                to="/playground"
                style={{
                  textDecoration: "none",
                  borderBottom: !storiesUnderlined && "white solid 2.5px",
                }}
              >
                <span className={styles.listAttribute}>Playground</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {withNavBarProp && <NavBar storyUnderlinedProp={storyUnderlined} />}
    </header>
  )
}
