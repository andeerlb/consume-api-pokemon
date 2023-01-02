const PROTOCOL = "https://";
const URL_API_POKEMON = "pokeapi.co/api";
const API_POKEMON_VERSION = "v2";

function api() {
    return PROTOCOL+URL_API_POKEMON+"/"+API_POKEMON_VERSION;
}

export default api;