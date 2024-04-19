import aboutImg from "../images/about.png";
import { Link } from "react-router-dom";

const AboutContent = () => {
    return (
        <section className="min-h-[75vh] ">
            <img
                src={aboutImg}
                alt="person sitting on a van"
                className="w-full"
            />
            <div className="flex flex-col gap-8 p-8  text-zinc-950">
                <h1 className="text-4xl font-extrabold">
                    Don&apos;t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="text-xl font-normal">
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="text-xl font-normal">
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
                <div className="p-8 bg-orange-300 font-semibold text-2xl rounded-lg">
                    <p>Your destination is waiting.</p>
                    <p>Your van is ready.</p>
                    <Link
                        to="/vans"
                        className="bg-stone-800 hover:bg-stone-900 p-4 text-white rounded-xl text-lg mt-6 inline-block"
                    >
                        Explore our vans
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
