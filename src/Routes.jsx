import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetails from "./pages/VansDetails";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVansDetailsLayout from "./components/HostVansDetailsLayout";
import HostVansDetails from "./pages/Host/vans-details/HostVansDetails";
import HostVansPricing from "./pages/Host/vans-details/HostVansPricing";
import HostVansPhotos from "./pages/Host/vans-details/HostVansPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import api from "./api";
import Login from "./pages/Login";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
                path="vans"
                element={<Vans />}
                loader={() => {
                    console.log("data fetched...");
                    return api.getVans();
                }}
                errorElement={<Error />}
            />
            <Route
                path="vans/:id"
                element={<VansDetails />}
                loader={({ params }) => {
                    return api.getVans(params.id);
                }}
            />
            <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route
                    path="vans"
                    element={<HostVans />}
                    loader={() => api.getHostVans()}
                />
                <Route
                    path="vans/:id"
                    element={<HostVansDetailsLayout />}
                    loader={({ params }) => api.getHostVans(params.id)}
                >
                    <Route index end element={<HostVansDetails />} />
                    <Route path="pricing" element={<HostVansPricing />} />
                    <Route path="photos" element={<HostVansPhotos />} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default routes;
