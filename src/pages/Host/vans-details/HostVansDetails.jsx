import { useOutletContext } from "react-router-dom";

const HostVansDetails = () => {
    const { name, type, description } = useOutletContext();
    return (
        <section className="flex flex-col gap-6">
            <p>
                <span className="font-bold">Name:</span> {name}
            </p>
            <p>
                <span className="font-bold">Category:</span> {type}
            </p>
            <p>
                <span className="font-bold">Description:</span> {description}
            </p>
            <p>
                <span className="font-bold">visibility:</span> Public
            </p>
        </section>
    );
};

export default HostVansDetails;
