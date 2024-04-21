import { redirect } from "react-router-dom";

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn") || false;

    if (!isLoggedIn) {
        const response = redirect("/login?message=You need to log in first");
        response.body = true;
        return response;
    }
    return false;
}
