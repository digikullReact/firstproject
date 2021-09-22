import React,{useState} from 'react'

function Home() {

    //useState("Something") --->returns and array ,

  const [state,setState]=useState({
    name:"",
    age:""

})



    const handleChange=(event)=>{
      

      setState({...state,[event.target.name]:event.target.value})

    }


    const clickData=()=>{

      ///console.log(document.getElementById("data").value)
      console.log(state);
    }

    


    // onchange 
    // keypress
    //keydown
    // keyup

    return (
        <div className="col-md-4 offset-4" style={{marginTop:"50px"}}>

            <input className="form-control" id="data" onChange={handleChange}  name="name" placeholder="Name"  name="name" type="text"/>
            <input className="form-control"  onChange={handleChange} name="age"  placeholder="Age" name="age" type="text"/>


           
            <button onClick={clickData} className="btn btn-success"> 
            Click Me
           
            </button>
            
        </div>
    )
}

export default Home
