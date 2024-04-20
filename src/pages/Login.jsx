import { useState } from "react";

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputsChange = (e) => {
        setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData);
    };

    return (
        <div className="flex flex-col justify-center items-center pt-20 gap-8">
            <h1 className="text-4xl text-zinc-900 font-bold">
                Sign in to your account
            </h1>
            <form
                action="#"
                className="w-3/5 max-w-[400px] flex flex-col gap-4"
                onSubmit={handleFormSubmit}
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="capitalize">
                        email address:*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={loginFormData.email}
                        onChange={handleInputsChange}
                        className="border p-1 px-4 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="capitalize">
                        password:*
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginFormData.password}
                        onChange={handleInputsChange}
                        className="border p-1 px-4 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-400 text-white rounded-md p-3 mt-4"
                >
                    Sign in
                </button>
            </form>
            <p>
                Don&apos;t have an account?
                <a href="#" className="text-orange-500 font-semibold">
                    {" "}
                    Create one now
                </a>
            </p>
        </div>
    );
};

export default Login;
