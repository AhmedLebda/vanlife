import { Outlet, useLoaderData } from "react-router-dom";
import BackToVansArrow from "./BackToVansArrow";
import HostVansDetailsCard from "./HostVansDetailsCard";
import HostVansDetailsNavbar from "./HostVansDetailsNavbar";

const HostVansDetailsLayout = () => {
    const van = useLoaderData();

    return (
        <section className="min-h-[63vh] mx-8 mb-8 p-6 rounded-md bg-white">
            <BackToVansArrow />
            <HostVansDetailsCard data={van} />
            <HostVansDetailsNavbar />
            <Outlet context={van} />
        </section>
    );
};

export default HostVansDetailsLayout;
