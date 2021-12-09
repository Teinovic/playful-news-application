import {useState} from 'react'
import styles from './style.module.scss'

export const Playground = () => {
    const [count, setCount] = useState<number>(0)
    const [top, setTop] = useState<number>(50)
    const [left, setLeft] = useState<number>(20)
    
    const moveRandomly = () => {
        let x = Math.floor(Math.random()*50);
        let y = Math.floor(Math.random()*20);
        setTop(x)
        setLeft(y)
    }


    return (
        <div 
            className={styles.amorphicContainer} 
            onClick={() => {
                setCount(prevCount => prevCount + 1);
                moveRandomly()
                }
            }
        >   <div className={styles.balloonContainer} style={{top: `${top}vh`, left: `${left}vw`}}>
                <div className={styles.balloon} >
                    <p>{count}</p>
                </div>
            </div>
           
            <div className={styles.amorphic}>
                <p>Click on the document in order to move the balloon's position.</p> 
            </div>
        </div>
    )
}
