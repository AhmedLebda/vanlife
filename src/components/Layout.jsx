import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = () => {
    return (
        <div className="bg-orange-100/60">
            <Navbar />
            <div className="min-h-[75vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
