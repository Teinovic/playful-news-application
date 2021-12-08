import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Waypoint } from 'react-waypoint'
import moment from 'moment'
import { getComms, getTopStories } from './util'


interface Props {
    storiesLinkProp: string
}

export const StoriesListed: React.FC<Props> = ({storiesLinkProp}) => {
    const [count, setCount] = useState([0, 20])
    const [posts, setPosts] = useState<any>([])
    const [commentsId, toggleCommentsId] = useState<any>()
    const [parentId, setParentId] = useState<number>(0)
    const [commentData, setCommentData] = useState<any>([{id: 1, parent: 1}])
    const [loading, setLoading] = useState<boolean>(false)
    const [hide, setHide] = useState<boolean>(false)
    const [endOfResultsNum, setEndOfResultsNum] = useState<number>(200)

    
    const postsArr = Object.entries(posts)


    useEffect(() => {  
      getComms(commentsId, setCommentData, parentId, setLoading)
    }, [commentsId]
    )

    useEffect(() => {
        getTopStories(count, setPosts, storiesLinkProp, setEndOfResultsNum)
    }, [count]
    )

    

    return (        
        <main className={styles.main} >
            {postsArr.map((key: any, index: any) => {
               if (key[1] !== null) { 
                return ( 
                    <div className={styles.cardContainer} key={key[1].id}>
                        <h1 
                            className={styles.title}    
                        >
                            <a 
                                href={key[1].url}
                                target="_blank" 
                                rel="noreferrer noopener"
                            >
                                    {key[1].title}
                            </a>
                        </h1>
                        <p className={styles.infoParagraph}>
                          <em>{key[1].score} </em> 
                          {key[1].score === 1? 'point ' : 'points '} 
                          by <em>{key[1].by} </em> 
                          {moment(key[1].time * 1000).fromNow()}.
                        </p>
                        
                        {key[1].kids ? 
                        <div>                          
                          <a    
                                href="#" 
                                onClick={(event) => {
                                    event.preventDefault()
                                    setHide(false)                                    
                                    toggleCommentsId(key[1].kids)
                                    setParentId(key[1].id)
                                }}
                                style={{display: parentId !== key[1].id ? 'block' : 'none' }}
                            >
                            Read comments ({key[1].kids.length})
                            </a>
                            
                            {key[1].id === parentId && loading? <div className={styles.loaderComment}></div>: <div></div>}
                            {key[1].id === parentId && parentId === commentData[0] && 
                            <figure 
                                className={styles.list}
                                style={{display: !hide ? 'block' : 'none' }}
                            >
                                <figcaption>Top comments ({key[1].kids.length}):</figcaption>
                                <ul>
                                {commentData[1].map( (item, key) => {
                                    return (                                        
                                        <li>
                                            Comment by <span>{item.by}</span>, {moment(item.time * 1000).fromNow()}.
                                            <p>{item.text}</p>
                                            <ul>
                                            {item.childCommentsArray.map((item, key) => {
                                                return (
                                                    <li>
                                                        Comment by {item.by}, {moment(item.time * 1000).fromNow()}
                                                        <p>{item.text}</p>
                                                    </li>
                                                )
                                            })}
                                            </ul>
                                        </li>
                                        
                                    )
                                } )}
                                </ul>
                                <div className={styles.hideButtonContainer}>
                                    <button className={styles.hideButton} onClick={(e) => {e.preventDefault(); setHide(true)}}>Hide comments</button>
                                </div>
                            </figure>}   
                            
                        </div> : <em>There are no comments to show.</em>}
                        
                        {index === postsArr.length - 1 && (
                            <Waypoint onEnter={() => setCount(prevCount => prevCount[1] < 500 ? [prevCount[0] + 20, prevCount[1] + 20]: [480, 500])}/>
                        )}
                    </div>
                    
               )}
            })}
            {count[1] < endOfResultsNum && <div className={styles.loader}></div>}
        </main>
    )
}
