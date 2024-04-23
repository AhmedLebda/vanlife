import {
    useSearchParams,
    Form,
    redirect,
    useActionData,
    useNavigation,
} from "react-router-dom";
import api from "../api";

export const loader = async () => {
    if (localStorage.getItem("loggedIn")) {
        const res = redirect("/host");
        res.body = true;
        return res;
    }
    return null;
};

export const action = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const params =
        new URL(request.url).searchParams.get("redirectTo") || "/host";
    try {
        await api.loginUser({ email, password });
        const res = redirect(params);
        res.body = true;
        return res;
    } catch (error) {
        return error;
    }
};

const Login = () => {
    const [searchParams] = useSearchParams();
    const error = useActionData();
    const { state } = useNavigation();
    return (
        <div className="flex flex-col justify-center items-center pt-20 gap-8">
            {searchParams.get("message") && (
                <pre className="text-red-600 font-bold">
                    {searchParams.get("message")}
                </pre>
            )}
            <h1 className="text-4xl text-zinc-900 font-bold">
                Sign in to your account
            </h1>

            {error && (
                <pre className="text-red-600 font-bold">{error.message}</pre>
            )}

            <Form
                method="POST"
                replace
                className="w-3/5 max-w-[400px] flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="capitalize">
                        email address:*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
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
                        className="border p-1 px-4 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white rounded-md p-3 mt-4 disabled:cursor-not-allowed disabled:bg-orange-300"
                    disabled={state === "submitting"}
                >
                    {state === "idle" ? "Log in" : "Logging in..."}
                </button>
            </Form>
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
