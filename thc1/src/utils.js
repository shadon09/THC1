let getMoviesBySearchTerm = async (key, search) => {
    let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${search}`);
    let data = await res.json();
    console.log(data);
}
let getMovieDetailsById = async (key, id) => {
    let res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${key}`);
    let data = await res.json();
    console.log(data);
}

export {getMovieDetailsById, getMoviesBySearchTerm};