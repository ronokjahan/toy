

import {  useLoaderData } from "react-router-dom";



const Chackout = () => {
  const loder=useLoaderData([])
  const {title,price,img}=loder
  console.log(loder);
  const hloader=event=>{
    event.preventDefault()
    const from=event.target 
    const email=from.email.value 
    const name=from.name.value 
    const date=from.date.value 
    const alladat={
      email,name,date,title,price,img
    }
  console.log(alladat);
    fetch('http://localhost:3000/orders',{
      method:'POST',
     headers:{
      "content-type":"application/json",
     
     },
      body: JSON.stringify(alladat)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <div>
      <form onSubmit={hloader} >
            <h1 className="text-center mb-4 font-bold">serveces{title}</h1>

          <div className="grid grid-cols-2 gap-4">

          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            <input type="text" name='name' className="input input-bordered" required />
            <input type="date" name="date" className="input input-bordered" required />
            <input type="phone" placeholder="email" name="phone"  className="input input-bordered" required />
          </div>
          <button type="submit" className="btn btn-block btn-secondary mt-3">View</button>
          </form> 
    </div>
  );
};

export default Chackout;