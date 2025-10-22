// utils/getIp.js
export const getIpAddress = async () => {
    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        return data.ip; // misalnya "36.84.xxx.xxx"
    } catch (err) {
        console.error("Error fetching IP:", err);
        return null;
    }
};
