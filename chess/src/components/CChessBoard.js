import React from 'react';

import { ChessBoard } from '../models/ChessBoard';

let PieceColor = {};
let PieceType = {};

(function(PieceColor) {
    PieceColor[PieceColor["White"] = 0] = "White";
    PieceColor[PieceColor["Black"] = 1] = "Black";
})(PieceColor);
(function(PieceType) {
    PieceType[PieceType["King"] = 0] = "King";
    PieceType[PieceType["Queen"] = 1] = "Queen";
    PieceType[PieceType["Rook"] = 2] = "Rook";
    PieceType[PieceType["Bishop"] = 3] = "Bishop";
    PieceType[PieceType["Knight"] = 4] = "Knight";
    PieceType[PieceType["Pawn"] = 5] = "Pawn";
})(PieceType);

const PieceColorLength = Object.keys(PieceColor).length / 2;
const PieceTypeLength = Object.keys(PieceType).length / 2;

export class CChessBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            board: new ChessBoard(), 
        };
    }

    pieceToASCII(color, type) {
        return String.fromCharCode(9812 + (color * PieceTypeLength) + type);
    }

    render() {
        const cbHeaders = "ABCDEFGH";
        const boardDims = this.state.board._board.length * this.state.board._board.length;

        let topHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        let botHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        let squares = new Array(boardDims).fill(0);
        squares = squares.map((o, i) => {
            const piece = this.pieceToASCII(PieceColor.White, PieceType.Pawn);
            //const piece = '\u265A';
            return <div className="cb-square" key={i}>{piece}</div> 
        });

        return (
            <div>
                <div className="cb-container">
                    <div className="cb-top">
                        <div className="cb-container-inner"> 
                            {topHeader}
                        </div>
                    </div>
                    {squares}
                    <div className="cb-bottom">
                        <div className="cb-container-inner"> 
                            {botHeader} 
                        </div>
                    </div>
                </div>

                {/*
                <div style={{float: 'left'}}></div>
                <div style={{textAlign: 'left'}}>Score: 0</div>
                <div style={{textAlign: 'left'}}>Turn: 0</div>
                <div style={{textAlign: 'left'}}>Last Move: (Piece)(0,0) to (Piece/Empty)(0,0)</div>
                <div style={{clear: 'both'}} /> */
                }
            </div>
        )
    }
}