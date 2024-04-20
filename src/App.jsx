import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
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
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VansDetails />} />
                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route
                                path="vans/:id"
                                element={<HostVansDetailsLayout />}
                            >
                                <Route
                                    index
                                    end
                                    element={<HostVansDetails />}
                                />
                                <Route
                                    path="pricing"
                                    element={<HostVansPricing />}
                                />
                                <Route
                                    path="photos"
                                    element={<HostVansPhotos />}
                                />
                            </Route>
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
