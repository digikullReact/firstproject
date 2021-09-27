import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

    const ForChild1="Child1"
    const ForChild2="Child2"
    const [state,setState]=useState("SSS");

    const Data=(argFromChild)=>{
        setState(argFromChild);////  ----->
    

}
    


    return (
        <div>
            <Child1  ForChild1={ForChild1}  Data={Data}/>
            <Child2 ForChild2={state}/>
            
        </div>
    )
}

export default Parent
