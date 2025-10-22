export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by your browser"));
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(
                    `${position.coords.latitude},${position.coords.longitude}`
                );
            },
            (error) => {
                reject(error);
            }
        );
    });
};
