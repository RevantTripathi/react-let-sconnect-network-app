import React, {useDebugValue} from 'react'

import "./Recents.css"

const  Recents = () => {
    const data=[
        {
            id:1,
            tag: "reactjs"

        },
        {
            id:2,
            tag: "programming"

        },
        {
            id:3,
            tag: "softwareengineering"

        },
        {
            id:4,
            tag: "design"

        },
        {
            id:5,
            tag: "developer"

        },
    ]

    return(
        <>
        <div className='recents_container'>
            <p className='recents_title'>Recents</p>
            <div className='recents_tags_container'>
                {data.map((value) => (
                    <p>#{value.tag}</p>
                ))}
            </div>
        </div>
        </>
    )

}

export default Recents;