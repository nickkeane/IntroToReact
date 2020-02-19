import React from 'react';

const bigText = {
    color: '#332299',
    fontSize: 40
}

const btnText = {
    color: '#000000',
    backgroundColor: "#FFFFFF",
    borderColor: "#0077AA",
    fontSize: 20,
    padding: '5px 20px',
    margin: '0px 5px',
    filter: 'drop-shadow(3px 3px 0px #332299)'
}

export class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <div style={bigText}>
                    <b>IMDB SEEKER</b>
                </div>
                <div>
                    <input id="searchQueryBox" style={btnText}></input>
                    <button style={btnText} onClick={(e) => { this.props.onClickSearch(e, document.getElementById("searchQueryBox").value); }}>Search</button>
                </div>
            </div>
        )
    }
}