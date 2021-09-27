import React,{useState} from 'react'

function Slider() {

    const [state,setState]=useState({
        img1:true,
        img2:false,
        img3:false

    })


    const [currentImage,setCurrentImage]=useState(1);


    const previous=()=>{
       

        if(currentImage===3){

            setState({img2:true,img1:false,img3:false})
            setCurrentImage(currentImage-1)
            
        }
        else if(currentImage===2){
            setState({img2:false,img1:true,img3:false})
            setCurrentImage(currentImage-1)


        }
    


 



    }

    const next=()=>{

     console.log(currentImage);
        debugger;

        if(currentImage===1){

            setState({img2:true,img1:false,img3:false})
            setCurrentImage(currentImage+1)
            
        }
        else if(currentImage===2){
            setState({img2:false,img1:false,img3:true})
            setCurrentImage(currentImage+1)


        }
    
      

    }




  

    return (
        <>
       
<div id="myCarousel" className="carousel slide">
 
 
  <div className="carousel-inner">
    <div className="item active">
     

     {
         state.img1? <div className="item">
         <img  src="https://source.unsplash.com//1500x600/?dogs" className="img-responsive"/>
         <div className="container">
           <div className="carousel-caption">
            
           </div>
         </div>
       </div>:""

     }

     {
         state.img2?    <div className="item">
         <img src="https://source.unsplash.com//1500x600/?nature"className="img-responsive"/>
         <div className="container">
         
         </div>
       </div>:""
     }
   

{
    state.img3?<div className="item">
    <img src="https://source.unsplash.com//1500x600/?cat"className="img-responsive"/>
    <div className="container">
    
    </div>
  </div>:""
}

    
  </div>

  <a className="left carousel-control" >
    <span className="icon-prev"></span>
  </a>
  <a className="right carousel-control" >
    <span className="icon-next"></span>
  </a>  
</div>



</div>
<button className="btn btn-success"  onClick={previous}>

Previous
</button>


<button className="btn btn-success" onClick={next}>

    Next
</button>

</>
    )
}

export default Slider
