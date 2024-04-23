import { Suspense } from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import VansFilter from "../components/VansFilter";
import VanCard from "../components/VanCard";
import api from "../api";

export const loader = () => {
    console.log("data fetched...");
    return defer({ vans: api.getVans() });
};

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const vansDataPromise = useLoaderData();

    const typeFilter = searchParams.get("type");
    const filters = ["simple", "luxury", "rugged"];

    const handleFiltering = (value) => {
        setSearchParams(
            (prev) => {
                if (value === "clear") {
                    prev.delete("type");
                } else {
                    prev.set("type", value);
                }
                return prev;
            },
            { replace: true }
        );
    };

    const renderVanCards = (loadedVansData) => {
        const vansToShow = !typeFilter
            ? loadedVansData
            : loadedVansData.filter((van) => van.type === typeFilter);
        return (
            <>
                {vansToShow.map((van) => (
                    <VanCard key={van.id} data={van} params={searchParams} />
                ))}
            </>
        );
    };

    return (
        <section className="min-h-[75vh] p-8">
            <h1 className="text-4xl font-extrabold">Explore our van options</h1>
            <VansFilter
                filters={filters}
                onFilter={handleFiltering}
                typeFilter={typeFilter}
            />

            <div className="grid grid-cols-2 gap-8">
                <Suspense fallback={<h1>loading</h1>}>
                    <Await resolve={vansDataPromise.vans}>
                        {renderVanCards}
                    </Await>
                </Suspense>
            </div>
        </section>
    );
};

export default Vans;
