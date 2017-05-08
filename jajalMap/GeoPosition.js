let GeoPosition = {

    onFindInitialLocation: new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position)
            },
            (error) => reject(error),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

        navigator.geolocation.watchPosition((position) => {
            console.log(position);
            resolve(position);
        });
    })
};

export default GeoPosition;