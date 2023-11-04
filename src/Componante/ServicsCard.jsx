import { Link } from "react-router-dom";


const ServicsCard = ({card}) => {
    const{_id,service_id,title,img,price}=card
   
    return (


        

    
         <div className="card w-96  bg-base-100 shadow-xl ">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
   <div className="text-center">
   <h2 className="text text-4xl p-4">
    {title}
     
    </h2>
    <p className="text-rose-500 text-2xl	">Price:${price}</p>
    <Link to={`/chackout/${_id}`}><button className="btn btn-active btn-secondary mt-3">Secondary</button></Link>
   </div>
    
   
    
  </div>
</div>
   
    );
};

export default ServicsCard;