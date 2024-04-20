import { useLoaderData } from "react-router-dom";
import BackToVansArrow from "../components/BackToVansArrow";

const VansDetails = () => {
    const van = useLoaderData();

    const { name, description, price, imageUrl, type } = van;

    let typeBg;

    if (type === "simple") {
        typeBg = "bg-orange-400 hover:bg-orange-500";
    } else if (type === "rugged") {
        typeBg = "bg-emerald-700 hover:bg-emerald-800";
    } else {
        typeBg = "bg-zinc-900 hover:bg-zinc-950";
    }

    return (
        <div className="p-8 flex flex-col gap-4">
            <BackToVansArrow />
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="rounded-lg "
            />
            <p
                className={`${typeBg} w-fit text-white py-1 px-4 rounded-lg capitalize cursor-pointer`}
            >
                {type}
            </p>
            <p className="text-3xl font-semibold">{name}</p>
            <p className="text-3xl font-semibold">
                <span>${price}</span>
                <span className="font-normal text-lg ">/day</span>
            </p>
            <p className="text-lg">{description}</p>
            <button className="bg-orange-400 w-full p-4 rounded-md text-lg hover:bg-orange-500 font-bold text-white">
                Rent this van
            </button>
        </div>
    );
};

export default VansDetails;
