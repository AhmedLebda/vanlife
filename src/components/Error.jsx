import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold mb-8">{error.message}</h1>
            <pre>
                {error.statusText} - {error.status}
            </pre>
        </div>
    );
};

export default Error;
