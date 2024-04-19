import VanCardType from "./VanCardType";

const HostVansDetailsCard = ({ data }) => {
    const { name, price, imageUrl, type } = data;

    if (Object.keys(data).length === 0) {
        return (
            <div className="py-16 text-5xl text-orange-500 font-bold font-serif text-center min-h-[75vh]">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex gap-8 mt-8 items-center">
            <img
                src={imageUrl}
                alt={`image of ${name} van`}
                className="max-w-52 rounded-md"
            />
            <div className="flex flex-col gap-4">
                <VanCardType type={type} />
                <p className="font-bold text-3xl">{name}</p>
                <p className="text-3xl">
                    <span className="font-bold">${price}</span>/day
                </p>
            </div>
        </div>
    );
};

export default HostVansDetailsCard;
