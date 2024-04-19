const VanCardType = ({ type }) => {
    let typeBg;

    if (type === "simple") {
        typeBg = "bg-orange-400";
    } else if (type === "rugged") {
        typeBg = "bg-emerald-700";
    } else {
        typeBg = "bg-zinc-900";
    }

    return (
        <p
            className={`${typeBg} w-fit text-white py-1 px-4 rounded-lg capitalize cursor-pointer`}
        >
            {type}
        </p>
    );
};

export default VanCardType;
