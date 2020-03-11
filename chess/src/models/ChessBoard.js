import { pieceColor, pieceType } from "./Piece";

function _fenPiecePlacement(board) {
    let out = '';
    let spaces = 0;
    for (let x = 0; x < board.length; ++x) {
        for (let y = 0; y < board.length; ++y) {
            let piece = board[x][y];
            if (piece === null) {
                ++spaces;
                continue;
            }

            if (spaces) {
                out += spaces.toString();
                spaces = 0;
            }

            let letter = '';
            switch (piece.type) {
                case pieceType.rook:
                    letter = 'R';
                    break;
                case pieceType.knight:
                    letter = 'N';
                    break;
                case pieceType.bishop:
                    letter = 'B';
                    break;
                case pieceType.queen:
                    letter = 'Q';
                    break;
                case pieceType.king:
                    letter = 'K';
                    break;
                case pieceType.pawn:
                    letter = 'P';
                    break;
            }
            letter = (piece.color === pieceColor.black) ? letter.toLowerCase() : letter;
            out += letter;
        }

        if (spaces) {
            out += spaces.toString();
            spaces = 0;
        }

        out += '/';
    }
}

export default class ChessBoard {
    _board = null;

    constructor() {
        this._board = new Array(8);
        for (let i = 0; i < 8; ++i)
            this._board[i] = new Array(8).fill(null);
    }

    get board() {
        return this._board;
    }

    get toFen() {
        let out = [];
        out.push(
            _fenPiecePlacement(this._board)
        );
        return out.join('');
    }

//     get boardRow(row) {
//         return this.board[row];
//     }

//     get boardRowCol(row, col) {
//         return this.board[row][col];
//     }
}