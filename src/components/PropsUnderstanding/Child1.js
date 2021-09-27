import React from 'react'
import Child2 from './Child2'

function Child1(props) {


    const changeChild2Data=()=>{

        props.Data("So From Child1 ");



    }
    return (
        <div>
            <h1>{props.ForChild1}</h1>

            <button onClick={changeChild2Data}>Click For Child 1</button>
            
        </div>
    )
}

export default Child1
