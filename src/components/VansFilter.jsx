const VansFilter = ({ filters, onFilter }) => {
    return (
        <div className="py-8 flex justify-between gap-6">
            {filters.map((filter) => (
                <button
                    key={filter}
                    value={filter}
                    onClick={() => onFilter(filter)}
                    className="py-2 capitalize bg-orange-200 hover:bg-orange-300 rounded-lg flex-1"
                >
                    {filter}
                </button>
            ))}

            <button
                value="clear"
                onClick={() => onFilter("clear")}
                className="py-2 capitalize flex-1 underline underline-offset-4 hover:text-gray-700"
            >
                clear filters
            </button>
        </div>
    );
};

export default VansFilter;
