import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    isActive
        ? `text-black underline underline-offset-4 text-orange-600`
        : "hover:text-black";

const HostNavbar = () => {
    return (
        <div className="flex gap-8 p-8 text-lg capitalize text-zinc-700">
            <NavLink to="/host" end className={navLinkStyles}>
                dashboard
            </NavLink>
            <NavLink to="/host/income" className={navLinkStyles}>
                income
            </NavLink>
            <NavLink to="/host/vans" className={navLinkStyles}>
                vans
            </NavLink>
            <NavLink to="/host/reviews" className={navLinkStyles}>
                reviews
            </NavLink>
        </div>
    );
};

export default HostNavbar;
