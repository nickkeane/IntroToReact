import React from 'react';

export class Movie extends React.Component {
    render() {
        const movie = this.props.movie;
        if (movie) {
            return (<div>
                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.original_title} />
                <div><b><i>{movie.original_title}</i></b></div>
                <div>Release Date: {movie.release_date}</div>
                <div>Budget: ${movie.budget.toLocaleString()}</div>
                <div>Revenue: ${movie.revenue.toLocaleString()}</div>
                <div>{
                    movie.genres.map((o, i) => { return <span>{o.name}, </span> })
                }</div>
                <div>Ratings: {movie.vote_average}/10.0 ({movie.vote_count} votes)</div>
            </div>);
        } else {
            return <div></div>
        }
    }
}

//     "homepage": "http://www.madmaxmovie.com",
//     "id": 76341,
//     "imdb_id": "tt1392190",
//     "original_language": "en",
//     "original_title": "Mad Max: Fury Road",
//     "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
//     "popularity": 30.678,
//     "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
//     "production_companies": [
//       {
//         "id": 79,
//         "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
//         "name": "Village Roadshow Pictures",
//         "origin_country": "US"
//       },
//       {
//         "id": 2537,
//         "logo_path": null,
//         "name": "Kennedy Miller Productions",
//         "origin_country": "AU"
//       },
//       {
//         "id": 174,
//         "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//         "name": "Warner Bros. Pictures",
//         "origin_country": "US"
//       }
//     ],
//     "production_countries": [
//       {
//         "iso_3166_1": "AU",
//         "name": "Australia"
//       },
//       {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//       }
//     ],
//     "release_date": "2015-05-13",
//     "revenue": 378858340,
//     "runtime": 121,
//     "spoken_languages": [
//       {
//         "iso_639_1": "en",
//         "name": "English"
//       }
//     ],
//     "status": "Released",
//     "tagline": "What a Lovely Day.",
//     "title": "Mad Max: Fury Road",
//     "video": false,
//     "vote_average": 7.5,
//     "vote_count": 15626
//   }