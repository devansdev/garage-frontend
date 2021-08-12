const APP_URL = "http://localhost:3010";
export const loadDevices = () => {
    return fetch(APP_URL + '/device/list').then(response => response.json());
}
export const addDevice = (data: any) => {
    return fetch(APP_URL + "/device", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
}