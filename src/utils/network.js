export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.log(`Could not fetch: ${res.status}`);
            return false;
        }

        return await res.json();
    } catch(e) {
        console.error(`Could not fetch: ${e.message}`);
        return false;
    }
};
