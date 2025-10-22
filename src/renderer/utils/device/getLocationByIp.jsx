export const getLocationByIP = async () => {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        return {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            lat: data.latitude,
            lng: data.longitude,
        };
    } catch (err) {
        console.error("Error fetching location:", err);
        return null;
    }
};
