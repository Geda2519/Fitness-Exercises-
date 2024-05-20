export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
};
export const youtubeOptions = {

    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '7e05093fc6msh214d7dda93c394ep1fe974jsn4708168fc498',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};