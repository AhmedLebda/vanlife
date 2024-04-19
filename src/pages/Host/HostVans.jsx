import HostVanCard from "../../components/HostVanCard";

import { useState, useEffect } from "react";
const HostVans = () => {
    const [vansData, setVansData] = useState([]);
    useEffect(() => {
        fetch("/api/host/vans")
            .then((response) => response.json())
            .then((data) => setVansData(data.vans));
    }, []);
    return (
        <section className="min-h-[63vh] px-8">
            <h1 className="text-4xl font-extrabold">Your listed vans</h1>
            {vansData.length > 0 ? (
                <div className="flex flex-col gap-4 mt-8">
                    {vansData.map((van) => (
                        <HostVanCard key={van.id} data={van} />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-5xl text-orange-500 font-bold font-serif text-center">
                    Loading...
                </div>
            )}
        </section>
    );
};

export default HostVans;
