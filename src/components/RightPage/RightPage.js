import React from 'react'
import Fruits from '../Fruits/Fruits'

const rightPage = (props) => {
    return(
        <div>
            <Fruits selectedFruit={props.selectedFruit} />
        </div>
    )
}

export default rightPage