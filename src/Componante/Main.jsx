import { Outlet } from "react-router-dom";
import Hader from "./Home/Hader";
import Footer from "./Home/Footer";


const Main = () => {
    return (
        <div>
            <Hader></Hader>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;