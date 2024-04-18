import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-4 items-center p-8 shadow-md">
            <Link to="/" className="mr-auto uppercase font-bold text-4xl">
                #vanlife
            </Link>
            <Link
                to="/about"
                className="capitalize font-medium hover:text-gray-700"
            >
                about
            </Link>
            <Link className="capitalize font-medium hover:text-gray-700">
                vans
            </Link>
        </nav>
    );
};

export default Navbar;
