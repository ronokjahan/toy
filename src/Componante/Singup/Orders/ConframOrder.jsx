import { useContext, useState } from "react";
import { useEffect } from "react";
import { Authcontex } from "../../Authprovider/Authprovider";
import OrderRow from "./OrderRow";
import { data } from "autoprefixer";



const ConframOrder = () => {
    const {user}=useContext(Authcontex)
    const [order,setorder]=useState([])
    console.log(user.email);
    const url=`http://localhost:3000/orders?email=${user?.email}`;
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setorder(data))

},[])
const handelDelet=id=>{
    const proced=confirm('Are you sure Delet')
    if(proced){
        fetch(`http://localhost:3000/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        
        
            if(data.deletedCount >0){
                alert('deleted sucessful')
                const reeminh=order.filter(ording=>ording._id !== id)
            setorder(reeminh)
        
            }
        })
       
    }
}

const orderhandel=id=>{

  fetch(`http://localhost:3000/orders/${id}`,{
    method:'PUT',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({status:'updateconfeum'})
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)
  
  
  })
}
    return (
        <div>
            <h1>Confarm-order{order.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {/* row 2 */}
     
      {/* row 3 */}
     
      {/* row 4 */}
     
    </tbody>
    {/* foot */}
    {
        order.map(order=><OrderRow 
        key={order.order}
        order={order}
        handelDelet={handelDelet}
        orderhandel={orderhandel}
        ></OrderRow>)
    }
    
  </table>
</div>
        </div>
    );
};

export default ConframOrder;