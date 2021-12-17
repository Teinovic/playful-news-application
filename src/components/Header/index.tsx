import React from "react"
import styles from "./style.module.scss"
import { Link, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: playgroundColor && "salmon" }}
    >
      <div className={styles.containerNav}>
        <div className={styles.logoContainer} onClick={() => navigate("/")}>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="viking logo"
            className={styles.siteLogo}
          />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListLi}>
              <span
                onClick={() => navigate("/stories")}
                className={styles.listAttribute}
                style={{
                  borderBottom: storiesUnderlined && "white solid 2.5px",
                  cursor: "pointer",
                }}
              >
                Stories
              </span>
            </li>
            <li className={styles.navListLi}>
              <span
                onClick={() => navigate("/playground")}
                style={{
                  borderBottom: !storiesUnderlined && "white solid 2.5px",
                  cursor: "pointer",
                }}
                className={styles.listAttribute}
              >
                Playground
              </span>
            </li>
          </ul>
        </nav>
      </div>
      {withNavBarProp && <NavBar storyUnderlinedProp={storyUnderlined} />}
    </header>
  )
}
