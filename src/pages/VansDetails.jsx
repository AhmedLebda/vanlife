import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

const VansDetails = () => {
    const [van, setVan] = useState({});

    const params = useParams();

    const { name, description, price, imageUrl, type } = van;

    let typeBg;

    if (type === "simple") {
        typeBg = "bg-orange-400 hover:bg-orange-500";
    } else if (type === "rugged") {
        typeBg = "bg-emerald-700 hover:bg-emerald-800";
    } else {
        typeBg = "bg-zinc-900 hover:bg-zinc-950";
    }

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((response) => response.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);

    // Render loading component before van data arrives from api
    if (Object.keys(van).length === 0) {
        return (
            <div className="py-16 text-5xl text-orange-500 font-bold font-serif text-center min-h-[75vh]">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-8 flex flex-col gap-4">
            <Link
                to="/vans"
                className="flex gap-2 items-center text-gray-600 hover:text-gray-800"
            >
                <img src={arrow} alt="left arrow" />
                <span className="underline underline-offset-2">
                    Back to all vans
                </span>
            </Link>
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
