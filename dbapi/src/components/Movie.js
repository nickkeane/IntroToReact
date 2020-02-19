import React from 'react';
import moment from 'moment';

// CSS Inline Styles
const eleWidth = 185;
const textStyle = {
    margin: '0px',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16
}

const divBorder = {
    border: '3px red',
    padding: 10,
    width: eleWidth
}

/**
 * A single Movie element, with poster, film name, and other useful
 * attributes.
 */
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
                    <img src={`https://image.tmdb.org/t/p/w${eleWidth}${movie.poster_path}`} alt={movie.original_title} />
                </div>
                <div style={divBorder}>
                    <div><b><i>{movie.original_title}</i></b></div>
                    <div><b>{relDate}</b></div>
                    <div>{budget}</div>
                    <div>{revenue}</div>
                    <div>{
                        movie.genres.map((o, i) => { return <span key={i}>{o.name}, </span> })
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