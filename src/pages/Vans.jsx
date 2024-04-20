import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VansFilter from "../components/VansFilter";
import VanCard from "../components/VanCard";
import api from "../api";

const Vans = () => {
    const [vansData, setVansData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        const loadVans = async () => {
            setLoading(true);
            try {
                const data = await api.getVans();
                setVansData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadVans();
    }, []);

    return (
        <section className="min-h-[75vh] p-8">
            <h1 className="text-4xl font-extrabold">Explore our van options</h1>
            <VansFilter
                filters={filters}
                onFilter={handleFiltering}
                typeFilter={typeFilter}
            />

            {loading && (
                <div
                    aria-live="polite"
                    className="py-16 text-5xl text-orange-500 font-bold font-serif text-center"
                >
                    Loading...
                </div>
            )}
            {error && (
                <div
                    aria-live="assertive"
                    className="py-16 text-5xl text-red-700 font-bold font-serif text-center"
                >
                    {error}
                </div>
            )}

            <div className="grid grid-cols-2 gap-8">
                {vansToShow.map((van) => (
                    <VanCard key={van.id} data={van} params={searchParams} />
                ))}
            </div>
        </section>
    );
};

export default Vans;
