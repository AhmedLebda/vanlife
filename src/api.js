const getVans = async (id = null) => {
    let request = null;
    if (id !== null) {
        request = `/api/vans/${id}`;
    } else {
        request = "/api/vans";
    }
    const response = await fetch(request);
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status,
        };
    }
    const data = await response.json();
    return data.vans;
};

const getHostVans = async (id = null) => {
    let request = null;
    if (id !== null) {
        request = `/api/host/vans/${id}`;
    } else {
        request = "/api/host/vans";
    }
    const response = await fetch(request);

    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status,
        };
    }
    const data = await response.json();
    return data.vans;
};

const loginUser = async (creds) => {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
};

export default { getVans, getHostVans, loginUser };
