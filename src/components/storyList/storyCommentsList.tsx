import React, { useState, useEffect } from "react"
import { getComms } from "./util"
import styles from "./style.module.scss"
import { StoryComment } from "./storyComment"

interface Props {
  kidsProp: any
}

export const StoryCommentsList: React.FC<Props> = ({ kidsProp }) => {
  const [commentsIds, setCommentsIds] = useState<number>()
  const [loading, setLoading] = useState<boolean>(false)
  const [commentData, setCommentData] = useState<{}>()
  const [commentsVisible, setCommentsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (commentsIds) getComms(commentsIds, setCommentData, setLoading)
  }, [commentsIds])

  return (
    <div>
      <a
        href="#"
        onClick={event => {
          event.preventDefault()
          setCommentsVisible(true)
          setCommentsIds(kidsProp)
        }}
        style={{ display: commentsVisible ? "none" : "block" }}
      >
        Read comments ({kidsProp.length})
      </a>

      {loading && <div className={styles.loaderComment}></div>}

      <figure
        className={styles.list}
        style={{ display: commentsVisible && !loading ? "block" : "none" }}
      >
        <figcaption>Top comments ({kidsProp.length}):</figcaption>
        <ul>
          {commentData &&
            commentData[1].map((item, _) => <StoryComment itemProp={item} />)}
          <div
            className={styles.hideButtonContainer}
            style={{ display: commentsVisible && !loading ? "block" : "none" }}
          >
            <button
              className={styles.hideButton}
              onClick={e => {
                e.preventDefault()
                setCommentsVisible(false)
              }}
            >
              Hide comments
            </button>
          </div>
        </ul>
      </figure>
    </div>
  )
}
