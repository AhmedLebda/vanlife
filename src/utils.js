import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedIn") || false;
    const path = new URL(request.url).pathname;

    if (!isLoggedIn) {
        const response = redirect(
            `/login?message=You need to log in first&redirectTo=${path}`
        );
        response.body = true;
        return response;
    }
    return false;
}

export function getVanTypeBgColor(type) {
    if (type === "simple") {
        return "bg-orange-400 hover:bg-orange-500";
    }
    if (type === "rugged") {
        return "bg-emerald-700 hover:bg-emerald-800";
    }
    if (type === "luxury") {
        return "bg-zinc-900 hover:bg-zinc-950";
    }
}
