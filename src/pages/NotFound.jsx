import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="min-h-[75vh] flex flex-col gap-8 justify-center p-8">
            <h1 className="text-zinc-900 text-4xl font-bold">
                Sorry, the page you were looking for was not found.
            </h1>
            <Link
                to="/"
                className="bg-zinc-900 hover:bg-zinc-950 text-white font-white text-2xl p-4 text-center rounded-lg"
            >
                Return to home
            </Link>
        </section>
    );
};

export default NotFound;
