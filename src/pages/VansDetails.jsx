import { useLoaderData, defer, Await } from "react-router-dom";
import BackToVansArrow from "../components/BackToVansArrow";
import api from "../api";
import { Suspense } from "react";
import VanCardType from "../components/VanCardType";

export const loader = ({ params }) => {
    return defer({ vanDetails: api.getVans(params.id) });
};

const VansDetails = () => {
    const data = useLoaderData();

    const renderVanDetails = (loadedVanDetails) => {
        const { name, description, price, imageUrl, type } = loadedVanDetails;

        return (
            <>
                <BackToVansArrow />
                <img
                    src={imageUrl}
                    alt={`image of ${name} van`}
                    className="rounded-lg "
                />
                <VanCardType type={type} />
                <p className="text-3xl font-semibold">{name}</p>
                <p className="text-3xl font-semibold">
                    <span>${price}</span>
                    <span className="font-normal text-lg ">/day</span>
                </p>
                <p className="text-lg">{description}</p>
                <button className="bg-orange-400 w-full p-4 rounded-md text-lg hover:bg-orange-500 font-bold text-white">
                    Rent this van
                </button>
            </>
        );
    };

    return (
        <div className="p-8 flex flex-col gap-4">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={data.vanDetails}>{renderVanDetails}</Await>
            </Suspense>
        </div>
    );
};

export default VansDetails;
