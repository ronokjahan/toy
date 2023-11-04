import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontex } from "../Authprovider/Authprovider";


const Singup = () => {
  const{SingUp}=useContext(Authcontex)
    const singuphandel=event=>{
        event.preventDefault()
        const from=event.target
        const email=from.email.value
        const password=from.password.value
        const cpassword=from.cpassword.value
        const total={email,password,cpassword}
        console.log(total);
        SingUp(email,password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
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
            <h1 className="text-5xl font-bold">Singup Now</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={singuphandel} className="card-body">
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
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confarm Password</span>
                </label>
                <input type="password" name="cpassword" placeholder=" confarm password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Singup</button>
              </div>
              <Link to='/login'><h2 className="text-center text-2xl font-bold text-fuchsia-700">Login Now</h2></Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Singup;