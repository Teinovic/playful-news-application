import React from "react"
import styles from './style.module.scss'
import moment from 'moment'

interface Props {
    itemProp: any
}

export const StoryInfo: React.FC<Props> = ({itemProp}) => {
    const {url, title, score, by, time} = itemProp             
    
    return (      
        <>              
            <h1 className={styles.title}>
                <a 
                    href={url}
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    {title}
                </a>
            </h1>
            <p className={styles.infoParagraph}>
            <em>{score} </em> 
            {score === 1? 'point ' : 'points '} 
            by <em>{by} </em> 
            {moment(time * 1000).fromNow()}.
            </p>
        </>
    )   
}
        
        