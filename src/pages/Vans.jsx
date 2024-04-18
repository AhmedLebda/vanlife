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
            <VansContainer data={vansToShow} />
        </section>
    );
};

export default Vans;
