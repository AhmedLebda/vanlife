import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VansDetails, { loader as vansDetailsLoader } from "./pages/VansDetails";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVansDetailsLayout, {
    loader as hostVansDetailsLayoutLoader,
} from "./components/HostVansDetailsLayout";
import HostVansDetails from "./pages/Host/vans-details/HostVansDetails";
import HostVansPricing from "./pages/Host/vans-details/HostVansPricing";
import HostVansPhotos from "./pages/Host/vans-details/HostVansPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
    loader as loginLoader,
    action as loginAction,
} from "./pages/Login";
import { requireAuth } from "./utils";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
                path="vans"
                element={<Vans />}
                loader={vansLoader}
                errorElement={<Error />}
            />
            <Route
                path="vans/:id"
                element={<VansDetails />}
                loader={vansDetailsLoader}
                errorElement={<Error />}
            />
            <Route
                path="host"
                element={<HostLayout />}
                loader={async ({ request }) => await requireAuth(request)}
            >
                <Route
                    index
                    element={<Dashboard />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path="income"
                    element={<Income />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path="vans"
                    element={<HostVans />}
                    loader={hostVansLoader}
                    errorElement={<Error />}
                />
                <Route
                    path="vans/:id"
                    element={<HostVansDetailsLayout />}
                    loader={hostVansDetailsLayoutLoader}
                    errorElement={<Error />}
                >
                    <Route
                        index
                        end
                        element={<HostVansDetails />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                    />
                    <Route
                        path="pricing"
                        element={
                            <HostVansPricing
                                loader={async ({ request }) =>
                                    await requireAuth(request)
                                }
                            />
                        }
                    />
                    <Route
                        path="photos"
                        element={
                            <HostVansPhotos
                                loader={async ({ request }) =>
                                    await requireAuth(request)
                                }
                            />
                        }
                    />
                </Route>
                <Route
                    path="reviews"
                    element={<Reviews />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
            </Route>
            <Route
                path="login"
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default routes;
