import React from 'react'

function Slider() {
    return (
        <>
       
<div id="myCarousel" className="carousel slide">
 
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="item active">
      <img src="/assets/example/bg_suburb.jpg" className="img-responsive"/>
      <div className="container">
        <div className="carousel-caption">
          <h1>Bootstrap 3 Carousel Layout</h1>
        
      </div>
    </div>
    <div className="item">
      <img src="http://lorempixel.com/1500/600/abstract/1" className="img-responsive"/>
      <div className="container">
        <div className="carousel-caption">
          <h1>Changes to the Grid</h1>
          <p>Bootstrap 3 still features a 12-column grid, but many of the CSS className names have completely changed.</p>
          <p><a className="btn btn-large btn-primary" href="#">Learn more</a></p>
        </div>
      </div>
    </div>
    <div className="item">
      <img src="http://placehold.it/1500X500" className="img-responsive"/>
      <div className="container">
        <div className="carousel-caption">
          <h1>Percentage-based sizing</h1>
          <p>With "mobile-first" there is now only one percentage-based grid.</p>
          <p><a className="btn btn-large btn-primary" href="#">Browse gallery</a></p>
        </div>
      </div>
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="icon-prev"></span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="icon-next"></span>
  </a>  
</div>



</div>

</>
    )
}

export default Slider
