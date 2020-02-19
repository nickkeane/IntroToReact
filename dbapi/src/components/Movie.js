import React from 'react';
import moment from 'moment';

// CSS Inline Styles

const textStyle = {
    margin: '0px 0px 0px 0px',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16
}

const divBorder = {
    border: '3px red',
    padding: 10,
    width: 183
}

export class Movie extends React.Component {
    render() {
        const movie = this.props.movie;

        
        if (movie) {
            const relDate = moment(this.props.movie.release_date, 'YYYY-MM-DD').format('M/DD/YYYY');
            const budget = "Budget: $" + movie.budget.toLocaleString();
            const revenue = "Revenue: $" + movie.revenue.toLocaleString();
            const ratings = `Ratings: ${movie.vote_average}/10.0 (${movie.vote_count} votes)`;
            return (
            <div style={textStyle}>
                <div style={divBorder}>
                    <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.original_title} />
                </div>
                <div style={divBorder}>
                    <div><b><i>{movie.original_title}</i></b></div>
                    <div>{relDate}</div>
                    <div>{budget}</div>
                    <div>{revenue}</div>
                    <div>{
                        movie.genres.map((o, i) => { return <span>{o.name}, </span> })
                    }</div>
                    <div>{ratings}</div>
                </div>
            </div>
            );
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