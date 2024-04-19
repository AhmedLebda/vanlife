import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
const BackToVansArrow = () => {
    return (
        <>
            <Link
                to=".."
                relative="path"
                className="flex gap-2 items-center text-gray-600 hover:text-gray-800"
            >
                <img src={arrow} alt="left arrow" />
                <span className="underline underline-offset-4">
                    Back to all vans
                </span>
            </Link>
        </>
    );
};

export default BackToVansArrow;
