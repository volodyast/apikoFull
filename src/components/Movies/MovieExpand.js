import toHTML from '../../untils/convert'
import moment from 'moment';
import MovieRecomendation from './MovieRecomendation'

const MovieExpand = (movie) => {
    let Movie = `
    <div class="movie">
        <div class="movie-img">
        ${
        movie.poster_path ?
            `<img src="${process.env.IMAGE_PATH + movie.poster_path}" alt="Image">` :
            `<img src="../../../public/no_movie.svg" alt="Image">`
    }
        </div>
        <div>
            <div class="movie-description">
                <h4>${`${movie.title} (${moment(movie.release_date).format('YYYY')})`}</h4>
                <div class="movie-details-description">
                    <span>Genres - ${movie.genres.map(genre => genre.name).join(', ')}</span>
                    |
                    <span> Release Date - ${moment(movie.release_date).format('MMM DD YYYY')}</span>
                </div>
                <p>${movie.overview}</p>
            </div>
            <div id="movie-recomendations">
                <h4>Recomendations</h4>
                <div id="movie-recomendations-container">
                </div>
            </div>
        </div>
    </div>
    `
    Movie = toHTML(Movie);

    let containerRecomendation = Movie.children[1].children[1].children[1];
    //реко
    if(movie.recomendations.results.length < 2){
        let ovie = `
        <div class="movie-recomendation">
                <img src="../../../public/no_movie.svg" alt="Image">
        </div>
    `
        let MovieElement = toHTML(ovie);
        containerRecomendation.appendChild(MovieElement);
        return Movie;
    }
        
    let i = 0, count = 0;
    while (count < 5 && i < movie.recomendations.results.length){
        if (movie.id != movie.recomendations.results[i].id) {
            let recomendation = movie.recomendations.results[i];
            containerRecomendation.appendChild(MovieRecomendation(recomendation));
            i++;
            count++;
        }
        i++;
    }
    return Movie;
}
`
popularity: 871.5
vote_count: 653
video: false
poster_path: "/uPGq1mkEXznUpapDmOSxbsybjfp.jpg"
id: 475303
adult: false
backdrop_path: "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg"
original_language: "en"
original_title: "A Rainy Day in New York"
genre_ids: (2) [35, 10749]
title: "A Rainy Day in New York"
vote_average: 6.7
overview: "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures."
release_date: "2019-07-26"
`

export default MovieExpand;