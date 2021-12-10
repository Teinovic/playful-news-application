import React from 'react'
import moment from 'moment'

interface Props {
    itemProp: any
}


export const StoryComments: React.FC<Props> = ({itemProp}) => {
    const { by, time, text, childCommentsArray, id} = itemProp
    
    console.log(itemProp)

    return (
        <li key={id}>
            Comment by <span>{by}</span>, {moment(time * 1000).fromNow()}.
            <p>{text}</p>
            <ul>
            {childCommentsArray.map(({by, time, text, id}, _) => {
                return (
                    <li key={id}>
                        Comment by {by}, {moment(time * 1000).fromNow()}
                        <p>{text}</p>
                    </li>
                )
            })}
            </ul>
        </li>
    )
}
