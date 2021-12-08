import React from 'react'
import { Playground } from '../components/Playground'
import { HeaderComponent } from '../components/Header'



export const PlaygroundContainer: React.FC = () => {
    
    return (
        <>
            <HeaderComponent withNavBarProp={false} storiesUnderlined={false} playgroundColor={true} storyUnderlined={''}/>
            <Playground />
        </>
    )
}
