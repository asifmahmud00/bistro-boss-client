import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeadFoot = location.pathname.includes('login');
    return (
        <div>
            {noHeadFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeadFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;