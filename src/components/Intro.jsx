const Intro = () => {
    return (
        <section className="bg-black/50 bg-intro bg-cover bg-blend-overlay min-h-[75vh] text-white flex  items-center gap-12 flex-col p-8 pt-28 ">
            <h1 className="text-4xl font-extrabold">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className="text-lg">
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
            </p>
            <button className="bg-orange-400 w-full p-4 rounded-md text-lg hover:bg-orange-500 font-bold">
                Find your van
            </button>
        </section>
    );
};

export default Intro;
