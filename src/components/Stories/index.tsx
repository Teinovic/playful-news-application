import styles from "./style.module.scss"
import { Link } from "react-router-dom"

export const Stories = () => {
  return (
    <main className={styles.main}>
      <div className={styles.storiesContainer}>
        <Link to="/topstories" style={{ textDecoration: "none" }}>
          <div className={styles.storyContainer}>
            <h1 className={styles.title}>Top Stories</h1>
          </div>
        </Link>
        <Link to="/beststories" style={{ textDecoration: "none" }}>
          <div className={styles.storyContainer}>
            <h1 className={styles.title}>Best Stories</h1>
          </div>
        </Link>
        <Link to="/newstories" style={{ textDecoration: "none" }}>
          <div className={styles.storyContainer}>
            <h1 className={styles.title}>New Stories</h1>
          </div>
        </Link>
      </div>
    </main>
  )
}
