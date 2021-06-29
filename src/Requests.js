const API_Key = "460ce15c4a36659429603e27911a7e34";

const requests = {
    fetchTrending : `/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    fetchNetflixOriginals : `/upcoming?api_key=${API_Key}&language=en-US&page=1`,
    
}

export default requests;