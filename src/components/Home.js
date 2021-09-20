import React,{useState} from 'react'

function Home() {

    //useState("Something") --->returns and array ,

    let [name,setName]=useState() // React's way  to manage the data -->

    let [age,setAge]=useState() // React's way  to manage the data -->





    const handleChange2=()=>{

    
    }
    const handleChange=(event)=>{
       
    }

    const handleKeyUp=(event)=>{
      //  console.log("Keyup",event.target.value)
    }

    const clickData=()=>{
      //  console.log(state);
    }


    // onchange 
    // keypress
    //keydown
    // keyup

    return (
        <div className="col-md-4 offset-4" style={{marginTop:"50px"}}>

            <input className="form-control"  onChange={handleChange}  placeholder="Name" onKeyUp={handleKeyUp}  name="name" type="text"/>
            <input className="form-control"  onChange={handleChange2}  placeholder="Age" name="age" type="text"/>


           
            <button onClick={clickData} className="btn btn-success"> 
            Click Me
           
            </button>
            
        </div>
    )
}

export default Home
