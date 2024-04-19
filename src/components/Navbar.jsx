import { Link, NavLink } from "react-router-dom";

const ActiveLinkStyles = "underline underline-offset-4 text-orange-600";
const navLinkStyles = ({ isActive }) =>
    isActive
        ? `${ActiveLinkStyles} capitalize font-medium`
        : "capitalize font-medium hover:text-gray-700";

const Navbar = () => {
    return (
        <nav className="flex gap-4 items-center p-8 shadow-md bg-white">
            <Link to="/" className="mr-auto uppercase font-bold text-4xl">
                #vanlife
            </Link>

            <NavLink to="host" className={navLinkStyles}>
                host
            </NavLink>
            <NavLink to="about" className={navLinkStyles}>
                about
            </NavLink>
            <NavLink to="vans" className={navLinkStyles}>
                vans
            </NavLink>
        </nav>
    );
};

export default Navbar;
