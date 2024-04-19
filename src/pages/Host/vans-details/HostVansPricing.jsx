import { useOutletContext } from "react-router-dom";

const HostVansPricing = () => {
    const { price } = useOutletContext();

    return (
        <p>
            <span className="text-3xl">${price}.00</span>
            <span className="text-gray-600 text-xl">/day</span>
        </p>
    );
};

export default HostVansPricing;
