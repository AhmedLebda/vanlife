import HostVanCard from "../../components/HostVanCard";
import { useLoaderData, defer, Await } from "react-router-dom";
import api from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export const loader = async ({ request }) => {
    await requireAuth(request);
    return defer({ vans: api.getHostVans() });
};

const HostVans = () => {
    const vansData = useLoaderData();

    const renderVanCards = (loadedVansData) => {
        return (
            <>
                <h1 className="text-4xl font-extrabold">Your listed vans</h1>

                <div className="flex flex-col gap-4 mt-8">
                    {loadedVansData.map((van) => (
                        <HostVanCard key={van.id} data={van} />
                    ))}
                </div>
            </>
        );
    };

    return (
        <section className="min-h-[63vh] px-8">
            <Suspense fallback={<h1>loading....</h1>}>
                <Await resolve={vansData.vans}>{renderVanCards}</Await>
            </Suspense>
        </section>
    );
};

export default HostVans;
