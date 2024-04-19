import { useOutletContext } from "react-router-dom";

const HostVansPhotos = () => {
    const { imageUrl, name } = useOutletContext();
    return (
        <section className="flex gap-4">
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="max-w-28 rounded-md"
            />
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="max-w-28 rounded-md"
            />
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="max-w-28 rounded-md"
            />
        </section>
    );
};

export default HostVansPhotos;
