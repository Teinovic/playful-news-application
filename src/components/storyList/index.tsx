import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Waypoint } from 'react-waypoint'
import moment from 'moment'
import { getComms, getTopStories } from './util'
import { StoryInfo } from './storyInfo'
import { StoryComments } from './storyComments'



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
    }, [commentsId, parentId]
    )

    useEffect(() => {
        getTopStories(count, setPosts, storiesLinkProp, setEndOfResultsNum)
    }, [count]
    )

    

    return (        
        <main className={styles.main} >
            {/* mapping the fetched news data */}
            {postsArr.map((key: any, index: any) => {              
              
              const {id, kids} = key[1]
              
              if (key[1] !== null) { 
                return ( 
                    <div className={styles.cardContainer} key={id}>
                        <StoryInfo itemProp={key[1]} />                        
                        {kids ? 
                        <div>                          
                            <a    
                                href="#" 
                                onClick={(event) => {
                                    event.preventDefault()
                                    setHide(false)                                    
                                    toggleCommentsId(kids)
                                    setParentId(id)
                                }}
                                style={{display: parentId !== id ? 'block' : 'none' }}
                            >
                            Read comments ({kids.length})
                            </a>
                            
                            {id === parentId && loading? <div className={styles.loaderComment}></div>: <></>}
                            {id === parentId && parentId === commentData[0] && 
                            <figure 
                                className={styles.list}
                                style={{display: !hide ? 'block' : 'none' }}
                            >
                                <figcaption>Top comments ({kids.length}):</figcaption>
                                <ul>
                                    {/* mapping the comments under the condition that the read comments button is clicked */}
                                    {commentData[1].map( (item, key) => <StoryComments itemProp={item}/>)}
                                </ul>
                                <div className={styles.hideButtonContainer}>
                                    <button 
                                        className={styles.hideButton} 
                                        onClick={(e) => {e.preventDefault(); setHide(true)}}
                                    >
                                        Hide comments
                                    </button>
                                </div>
                            </figure>}   
                            
                        </div> : 
                        <em>There are no comments to show.</em>
                        }
                        
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
