import React from "react"
import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom"

export const HomeComponent: React.FC = () => {
  let navigate = useNavigate()

  return (
    <section className={styles.container}>
      <div className={styles.leftHalf} onClick={() => navigate("/stories")}>
        <h1 className={styles.titleLeft}>
          If you are interested in reading our most fun stories, choose this
          side.
        </h1>
      </div>
      <div className={styles.rightHalf} onClick={() => navigate("/playground")}>
        <h1 className={styles.titleRight}>
          If you are interested in spending some playful time, choose this side.
        </h1>
      </div>
    </section>
  )
}
