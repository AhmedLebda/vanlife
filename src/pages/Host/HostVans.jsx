import HostVanCard from "../../components/HostVanCard";
import { useLoaderData } from "react-router-dom";

const HostVans = () => {
    const vansData = useLoaderData();
    return (
        <section className="min-h-[63vh] px-8">
            <h1 className="text-4xl font-extrabold">Your listed vans</h1>

            <div className="flex flex-col gap-4 mt-8">
                {vansData.map((van) => (
                    <HostVanCard key={van.id} data={van} />
                ))}
            </div>
        </section>
    );
};

export default HostVans;
