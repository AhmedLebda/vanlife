import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    isActive
        ? `text-black underline underline-offset-4 text-orange-600`
        : "hover:text-black";

const HostVansDetailsNavbar = () => {
    return (
        <nav className="flex gap-8 py-8 text-lg capitalize text-zinc-700">
            <NavLink to="." end className={navLinkStyles}>
                details
            </NavLink>
            <NavLink to="pricing" className={navLinkStyles}>
                pricing
            </NavLink>
            <NavLink to="photos" className={navLinkStyles}>
                photos
            </NavLink>
        </nav>
    );
};

export default HostVansDetailsNavbar;
