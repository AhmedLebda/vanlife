import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackToVansArrow from "./BackToVansArrow";
import HostVansDetailsCard from "./HostVansDetailsCard";
import HostVansDetailsNavbar from "./HostVansDetailsNavbar";

const HostVansDetailsLayout = () => {
    const [van, setVan] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((response) => response.json())
            .then((data) => setVan(data.vans[0]));
    }, [id]);

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
