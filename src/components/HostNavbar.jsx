import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    isActive
        ? `text-black underline underline-offset-4 text-orange-600`
        : "hover:text-black";

const HostNavbar = () => {
    return (
        <nav className="flex gap-8 p-8 text-lg capitalize text-zinc-700">
            <NavLink to="." end className={navLinkStyles}>
                dashboard
            </NavLink>
            <NavLink to="income" className={navLinkStyles}>
                income
            </NavLink>
            <NavLink to="vans" className={navLinkStyles}>
                vans
            </NavLink>
            <NavLink to="reviews" className={navLinkStyles}>
                reviews
            </NavLink>
        </nav>
    );
};

export default HostNavbar;
