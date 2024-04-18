import { Link } from "react-router-dom";

const VanCard = ({ data }) => {
    const { id, name, price, imageUrl, type } = data;

    let typeBg;

    if (type === "simple") {
        typeBg = "bg-orange-400 hover:bg-orange-500";
    } else if (type === "rugged") {
        typeBg = "bg-emerald-700 hover:bg-emerald-800";
    } else {
        typeBg = "bg-zinc-900 hover:bg-zinc-950";
    }

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
                <p
                    className={`${typeBg} w-fit text-white py-1 px-4 rounded-lg capitalize cursor-pointer`}
                >
                    {type}
                </p>
            </div>
        </Link>
    );
};

export default VanCard;
