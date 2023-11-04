import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontex } from "../Authprovider/Authprovider";
import { data } from "autoprefixer";


const Login = () => {
  const{sinIn} =useContext(Authcontex)
  const location=useLocation()
  const navigat=useNavigate()
  let from = location.state?.from?.pathname ||'/'
  
    const loginhandel=event=>{
        event.preventDefault()
        const from=event.target
        const email=from.email.value
        const password=from.password.value
        const total={email,password}
        console.log(total);
        sinIn(email,password)
       
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          const loguser={
            email:user.email
          }
          console.log(loguser);
          // navigat(from,{replace:true})
          fetch('http://localhost:3000/jwt',{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify(loguser)
          })
          .then(res=>res.json())
          .then(data=>{console.log('jwt respons',data)})
          // local storage is not a best | it is second best  ------------
          localStorage.setItem(data.token)


        })
        .catch((error) => {
          const errorCode = error.code;
          
        console.log(errorCode);
        });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginhandel} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <Link to='/singup'><h2 className="text-center text-2xl font-bold text-fuchsia-700">Singup Now</h2></Link>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;