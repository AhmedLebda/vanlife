import { useSearchParams, useLoaderData } from "react-router-dom";
import VansFilter from "../components/VansFilter";
import VanCard from "../components/VanCard";

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const vansData = useLoaderData();

    const typeFilter = searchParams.get("type");
    const filters = ["simple", "luxury", "rugged"];

    const vansToShow = !typeFilter
        ? vansData
        : vansData.filter((van) => van.type === typeFilter);

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

    return (
        <section className="min-h-[75vh] p-8">
            <h1 className="text-4xl font-extrabold">Explore our van options</h1>
            <VansFilter
                filters={filters}
                onFilter={handleFiltering}
                typeFilter={typeFilter}
            />

            <div className="grid grid-cols-2 gap-8">
                {vansToShow.map((van) => (
                    <VanCard key={van.id} data={van} params={searchParams} />
                ))}
            </div>
        </section>
    );
};

export default Vans;
