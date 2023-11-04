import { useState } from "react";
import { useEffect } from "react";
import ServicsCard from "../ServicsCard";


const Serveces = () => {
    const [service,setservice]=useState([])
    useEffect(()=>{
fetch('http://localhost:3000/servece')
.then(res=>res.json())
.then(data=>setservice(data))

    },[])
    return (
        <div>
           <h1 className="text-center text-4xl mt-4 p-6 text-fuchsia-800">SERVECES</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          
          {
                service.map(card=><ServicsCard 
                
                key={card._id}
                card={card}
                
                ></ServicsCard>)
            }

          </div>
        </div>
    );
};

export default Serveces;