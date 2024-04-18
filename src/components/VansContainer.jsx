import VanCard from "./VanCard";

const VansContainer = ({ data }) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            {data.map((van) => (
                <VanCard key={van.id} data={van} />
            ))}
        </div>
    );
};

export default VansContainer;
