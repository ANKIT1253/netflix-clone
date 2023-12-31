const API_KEY = "241453a126ef57b28ae94972eb901757";

export const requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getCollection:(platform, endpoint)=>`${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoById:(details)=>`${details.platform}/${details.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`
}

 export const platform = {
    tv:"tv",
    movie: "movie"
}

export const endpoints = {
    popular:"popular",
    upcoming:"upcoming",
    topRated:"top_rated",
    nowPlaying:"now_playing",
    airingToday:"airing_today",
    onTheAir: "on_the_air"
}