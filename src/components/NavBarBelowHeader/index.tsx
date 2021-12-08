import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

export const NavBar: React.FC<{storyUnderlinedProp: string}> = ({storyUnderlinedProp}) => {
    let navigate = useNavigate()
    
    return (
        <nav className={styles.container}>
            <ul className={styles.navFlex}>
                <li className={styles.navItem}>
                    <p onClick={() => navigate("/topstories")} style={{ borderBottom: storyUnderlinedProp==='topStories' && 'white solid 1px'}} >Top Stories</p>
                </li>
                <li className={styles.navItem}>
                    <p onClick={() => navigate("/beststories")} style={{ borderBottom: storyUnderlinedProp==='bestStories' && 'white solid 1px'}}>Best Stories</p>
                </li>
                <li className={styles.navItem}>
                    <p onClick={() => navigate("/newstories")} style={{ borderBottom: storyUnderlinedProp==='newStories' && 'white solid 1px'}}>New Stories</p>
                </li>
            </ul>
        </nav>
    )
}
