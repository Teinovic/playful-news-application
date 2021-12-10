import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Waypoint } from 'react-waypoint'
import { getStories } from './util'
import { StoryInfo } from './storyInfo'




interface Props {
    storiesLinkProp: string
}

export const StoriesListed: React.FC<Props> = ({storiesLinkProp}) => {
    const [count, setCount] = useState([0, 20])
    const [posts, setPosts] = useState<{}>([])
    const [endOfResultsNum, setEndOfResultsNum] = useState<number>(200)
    
    const postsArr = Object.entries(posts)

    useEffect(() => {
        getStories(count, setPosts, storiesLinkProp, setEndOfResultsNum)
    }, [count]
    )   

    return (        
        <main className={styles.main} >
            {/* mapping the fetched news data */}
            {postsArr.map((key: any, index: any) => {                            
              const {id} = key[1]              
              if (key[1] !== null) { 
                return ( 
                    <div className={styles.cardContainer} key={id}>
                        <StoryInfo key={id} itemProp={key[1]} />                                                                      
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
