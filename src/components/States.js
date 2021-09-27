import React,{useState} from 'react'

function States(props) {

    // it holds only the data present in your html component
    // text ,string ,boolean ,image 
    const [state,setState]=useState("Java,Node js")

    //console.log(props.greetings);
    const ChangeText=()=>{

        setState("Something else")

    }

    props.greetings();




    return (
        <div>
            <h1>I am a developer</h1>
            <h1>I know JS,{state}</h1>

            <button onClick={ChangeText}>Click ME</button>
            
        </div>
    )
}

export default States
