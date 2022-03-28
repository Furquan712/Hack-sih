// const BASE_API_URL = "https://interstellar_sih_2022.herokuapp.com/";
// const MEDIA_URL = "https://interstellar_sih_2022.herokuapp.com";

const BASE_API_URL = "http://localhost:8000/";
const MEDIA_URL = "http://localhost:8000";

function BackendApi(endpoint = '') {
    return BASE_API_URL + endpoint
}

function BackendCropApi(endpoint = '') {
    return BackendApi(`crop/${endpoint}`)
}
export { BackendApi };

export { BackendCropApi };

export { MEDIA_URL };