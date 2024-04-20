const VansFilter = ({ filters, onFilter, typeFilter }) => {
    const styles = `py-2 capitalize bg-orange-200 hover:bg-orange-300 rounded-lg flex-1`;

    let selectedStyle = null;
    if (typeFilter === "simple") {
        selectedStyle =
            "bg-orange-400 py-2 capitalize rounded-lg flex-1 text-white";
    } else if (typeFilter === "rugged") {
        selectedStyle =
            "bg-emerald-700 py-2 capitalize rounded-lg flex-1 text-white";
    } else if (typeFilter === "luxury") {
        selectedStyle =
            "bg-zinc-900 py-2 capitalize rounded-lg flex-1 text-white";
    }

    return (
        <div className="py-8 flex justify-between gap-6">
            {filters.map((filter) => (
                <button
                    key={filter}
                    value={filter}
                    onClick={() => onFilter(filter)}
                    className={
                        filter === typeFilter ? `${selectedStyle}` : `${styles}`
                    }
                >
                    {filter}
                </button>
            ))}

            {typeFilter && (
                <button
                    value="clear"
                    onClick={() => onFilter("clear")}
                    className="py-2 capitalize flex-1 underline underline-offset-4 hover:text-gray-700"
                >
                    clear filters
                </button>
            )}
        </div>
    );
};

export default VansFilter;
