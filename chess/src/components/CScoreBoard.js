import React from 'react';

export default class CScoreBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            turn: 0,
            lastMove: { 
                fromPiece: null,
                fromLoc: [0, 0],
                toPiece: null,
                toLoc: [0, 0]
            }
        }
    }

    render() {
        return (
            <div>
                <div style={{float: 'left'}}></div>
                <div style={{textAlign: 'left'}}>Score: {this.state.score}</div>
                <div style={{textAlign: 'left'}}>Turn: {this.state.turn}</div>
                <div style={{textAlign: 'left'}}>Last Move: {`(${this.state.lastMove.fromPiece})(${this.state.lastMove.fromLoc[0]},${this.state.lastMove.fromLoc[1]}) to (${this.state.lastMove.toPiece})(${this.state.lastMove.toLoc[0]},${this.state.lastMove.toLoc[1]})`}</div>
                <div style={{clear: 'both'}} />
            </div>
        )
    }
}