import React,{useState} from 'react'







    //     let nameData = document.getElementById('name-id').value;

    //     console.log(nameData)



    // }

function Counter() {
    let  myValue=0;

    const [value,setValue]=useState(0);

   const  increment=()=>{
       myValue=myValue+1
       setValue(value+1);    ///  --->it actually does the reendering of the part which got changed
   }

   const  decrement=()=>{
    myValue=myValue-1
    document.getElementById("myValue").innerHTML=myValue
    setValue(value-1);
}


    return (
        <div>
           <h1>
               Value-
           {value}


           </h1>

           <h1 id="myValue">
               My Value-
           {myValue}


           </h1>
          

            <button className="btn btn-success" onClick={increment}>Increment</button>

            <button className="btn btn-success" onClick={decrement}>Decrement</button>
            
        </div>
    )
}

export default Counter
