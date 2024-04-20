import VanCardType from "./VanCardType";

const HostVansDetailsCard = ({ data }) => {
    const { name, price, imageUrl, type } = data;

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
