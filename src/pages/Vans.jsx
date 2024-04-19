import { useState, useEffect } from "react";
import VansFilter from "../components/VansFilter";
import VansContainer from "../components/VansContainer";

const Vans = () => {
    const [filter, setFilter] = useState(null);
    const [vansData, setVansData] = useState([]);

    const filters = ["simple", "luxury", "rugged"];
    const vansToShow = !filter
        ? vansData
        : vansData.filter((van) => van.type === filter);

    const handleFiltering = (value) => {
        value === "clear" ? setFilter(null) : setFilter(value);
    };

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => setVansData(data.vans));
    }, []);

    return (
        <section className="min-h-[75vh] p-8">
            <h1 className="text-4xl font-extrabold">Explore our van options</h1>
            <VansFilter filters={filters} onFilter={handleFiltering} />
            {vansData.length > 0 ? (
                <div className="flex flex-col gap-4 mt-8">
                    <VansContainer data={vansToShow} />
                </div>
            ) : (
                <div className="py-16 text-5xl text-orange-500 font-bold font-serif text-center">
                    Loading...
                </div>
            )}
        </section>
    );
};

export default Vans;
