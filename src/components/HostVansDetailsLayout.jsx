import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import BackToVansArrow from "./BackToVansArrow";
import HostVansDetailsCard from "./HostVansDetailsCard";
import HostVansDetailsNavbar from "./HostVansDetailsNavbar";
import { requireAuth } from "../utils";
import api from "../api";
import { Suspense } from "react";

export const loader = async ({ params, request }) => {
    await requireAuth(request);
    return defer({ vanDetails: api.getHostVans(params.id) });
};

const HostVansDetailsLayout = () => {
    const data = useLoaderData();

    const renderVanDetails = (loadedVanData) => {
        return (
            <>
                <BackToVansArrow />
                <HostVansDetailsCard data={loadedVanData} />
                <HostVansDetailsNavbar />
                <Outlet context={loadedVanData} />
            </>
        );
    };

    return (
        <section className="min-h-[63vh] mx-8 mb-8 p-6 rounded-md bg-white">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={data.vanDetails}>{renderVanDetails}</Await>
            </Suspense>
        </section>
    );
};

export default HostVansDetailsLayout;
