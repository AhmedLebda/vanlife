import { Outlet } from "react-router-dom";
import HostNavbar from "./HostNavbar";
const Host = () => {
    return (
        <>
            <HostNavbar />
            <Outlet />
        </>
    );
};

export default Host;
