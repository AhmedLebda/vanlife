import { Link } from "react-router-dom";
import VanCardType from "./VanCardType";

const VanCard = ({ data }) => {
    const { id, name, price, imageUrl, type } = data;

    return (
        <Link
            to={`/vans/${id}`}
            aria-label={`View details for ${name}, priced at $${price} per day`}
        >
            <div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={imageUrl}
                        alt={`image of ${name} van`}
                        className="rounded-lg transition-transform hover:scale-110"
                    />
                </div>
                <div className="flex justify-between py-2 text-xl font-semibold">
                    <p>{name}</p>
                    <p className="flex flex-col">
                        <span>${price}</span>
                        <span className="font-normal text-sm self-end">
                            /day
                        </span>
                    </p>
                </div>

                <VanCardType type={type} />
            </div>
        </Link>
    );
};

export default VanCard;
