import { useEffect, useState } from "react";

// const res = await fetch(`https://api.themoviedb.org/3${genre}?api_key=${API_KEY}&language=en-US&page=1`);
const API_KEY = 'cc0e2f4b6a82284dfa9a47aae043d3b0'

const fetchShow = async (media, country, language) => {
    const response = await fetch(`https://api.themoviedb.org/3/${media}?api_key=cc0e2f4b6a82284dfa9a47aae043d3b0&include_video=true&sort_by=popularity.desc&with_origin_country=${country}&with_original_language=${language}`)
    const data = await response.json();
    return (data.results)
}

export default fetchShow;
