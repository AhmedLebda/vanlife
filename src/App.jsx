import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetails from "./pages/VansDetails";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/vans" element={<Vans />} />
                        <Route path="/vans/:id" element={<VansDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
