import { redirect } from "react-router-dom";

export async function requireAuth() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        const response = redirect("/login?message=You need to log in first");
        response.body = true;
        return response;
    }
    return false;
}
