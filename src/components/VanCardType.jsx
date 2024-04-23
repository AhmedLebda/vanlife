import { getVanTypeBgColor } from "../utils";

const VanCardType = ({ type }) => {
    let typeBg = getVanTypeBgColor(type);

    return (
        <p
            className={`${typeBg} w-fit text-white py-1 px-4 rounded-lg capitalize cursor-pointer`}
        >
            {type}
        </p>
    );
};

export default VanCardType;
