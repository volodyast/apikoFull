import toHTML from "../../../untils/convert";
import MovieCollapse from "../../../components/Movies/MovieCollapse";


const addToContainerMovie = (movies, fun, page = 1) => {


    let containerMovie = document.getElementById("container-movies");
    if (!containerMovie) {
        containerMovie = toHTML(`<div id="container-movies"> </div>`);
        document.getElementById('app').appendChild(containerMovie);
    }

    for (let movie of movies) {
        containerMovie.appendChild(MovieCollapse(movie))
    }
}


export default addToContainerMovie;