import imge1 from '../../assets/images/banner/1.jpg'
import imge2 from '../../assets/images/banner/2.jpg'
import imge3 from '../../assets/images/banner/3.jpg'
import imge4 from '../../assets/images/banner/4.jpg'


const Home = () => {
    return (
        <div className="carousel w-full w-[1000px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={imge1} className="w-full" />
    <div className="absolute flex bg-cover bg-center	  left-5 right-5 top-0 left-0 pl-4">
<div>
<h1 className='text-6xl font-bold  text-white'>Affordable <br />
 Price For Car <br />Servicing</h1> <br />
<p> There are many variations of passages of  available, 
   <br />but the majority have suffered alteration in some form</p>
   <button className="btn btn-active btn-secondary m-5">Secondary</button>
     <button className="btn btn-active btn-secondary m-4">Secondary</button>
</div>

     
    </div>
    <div className="absolute flex justify-end	 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle m-5">❮</a> 
      <a href="#slide2" className="btn btn-circle m-4">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={imge2} className="w-full" />
    <div className="absolute flex justify-end	 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle m-5">❮</a> 
      <a href="#slide3" className="btn btn-circle m-4">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={imge3} className="w-full" />
    <div className="absolute fabsolute flex justify-end	 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide2" className="btn btn-circle m-5">❮</a> 
      <a href="#slide4" className="btn btn-circle m-4">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={imge4} className="w-full" />
    <div className="absolute flex justify-end	 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle m-5">❮</a> 
      <a href="#slide1" className="btn btn-circle m-4">❯</a>
    </div>
  </div>
</div>
    );
};

export default Home;