import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

export const NavBar: React.FC<{storyUnderlinedProp: string}> = ({storyUnderlinedProp}) => {
    let navigate = useNavigate()
    
    return (
        <nav className={styles.container}>
            <ul className={styles.navFlex}>
                <li className={styles.navItem}>
                    <a onClick={() => navigate("/topstories")} style={{ borderBottom: storyUnderlinedProp==='topStories' && 'white solid 1px'}} >Top Stories</a>
                </li>
                <li className={styles.navItem}>
                    <a onClick={() => navigate("/beststories")} style={{ borderBottom: storyUnderlinedProp==='bestStories' && 'white solid 1px'}}>Best Stories</a>
                </li>
                <li className={styles.navItem}>
                    <a onClick={() => navigate("/newstories")} style={{ borderBottom: storyUnderlinedProp==='newStories' && 'white solid 1px'}}>New Stories</a>
                </li>
            </ul>
        </nav>
    )
}
