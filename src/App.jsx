import { RouterProvider } from "react-router-dom";
import "./server";
import routes from "./Routes";

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
