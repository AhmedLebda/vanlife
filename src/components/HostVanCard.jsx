import { Link } from "react-router-dom";

const HostVanCard = ({ data }) => {
    const { id, name, price, imageUrl } = data;
    return (
        <Link
            to={`/host/vans/${id}`}
            className="flex gap-6 p-4 items-center bg-white rounded-md"
        >
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="max-w-20 rounded-md"
            />
            <div>
                <p className="font-bold text-lg">{name}</p>
                <p className="text-gray-700">${price}/day</p>
            </div>
            <button className="ml-auto text-gray-700 hover:text-black">
                Edit
            </button>
        </Link>
    );
};

export default HostVanCard;
