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
    squares = null;
    scoreBoard = null;

    constructor(props) {
        super(props);

        this.state = {
            board: new ChessBoard(), 
        };
    }

    pieceToASCII(color, type) {
        return String.fromCharCode(9812 + (color * PieceTypeLength) + type);
    }

    initializeBoard() {
        const boardDims = this.state.board._board.length * this.state.board._board.length;
        this.squares = new Array(boardDims).fill(0);
        this.squares = this.squares.map((o, i) => {
            if (i >= 16 && i < 48)
                return <div className="cb-square" key={i}></div>;

            let color = PieceColor.White;
            let type = PieceType.Pawn;
            
            // select chess piece type
            if ((i >= 0 && i < 8) || (i >= 56 && i < 64)) {
                switch(i % 8) {
                    case 0:
                    case 7:
                        type = PieceType.Rook;
                        break;
                    case 1: 
                    case 6:
                        type = PieceType.Knight;
                        break;
                    case 2:
                    case 5:
                        type = PieceType.Bishop;
                        break;
                    case 3:
                        type = PieceType.Queen;
                        break;
                    case 4:
                        type = PieceType.King;
                        break;
                    default:
                        break;
                }
            }

            // toggle color for bottom two rows
            if (i >= 48 && i < 64)
                color = PieceColor.Black;

            const piece = this.pieceToASCII(color, type);
            return <div className="cb-square" key={i}>{piece}</div> 
        });
    }

    initializeScoreBoard() {
        this.scoreBoard = <div>
            <div style={{float: 'left'}}></div>
            <div style={{textAlign: 'left'}}>Score: 0</div>
            <div style={{textAlign: 'left'}}>Turn: 0</div>
            <div style={{textAlign: 'left'}}>Last Move: (Piece)(0,0) to (Piece/Empty)(0,0)</div>
            <div style={{clear: 'both'}} />
        </div>
    }

    render() {
        const cbHeaders = "ABCDEFGH";
        const topHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        const botHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);

        this.initializeBoard();
        this.initializeScoreBoard();

        return (
            <div>
                <div className="ui-container">
                    <div className="cb-container">
                        <div className="cb-top">
                            <div className="cb-container-inner"> 
                                {topHeader}
                            </div>
                        </div>
                        {this.squares}
                        <div className="cb-bottom">
                            <div className="cb-container-inner"> 
                                {botHeader} 
                            </div>
                        </div>
                    </div>
                    <div className="sb-container">
                        {this.scoreBoard}
                    </div>
                </div>
            </div>
        )
    }
}