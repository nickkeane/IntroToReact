export class ChessBoard {
    _board = null;

    constructor() {
        this._board = new Array(8);
        for (let i = 0; i < 8; ++i)
            this._board[i] = new Array(8).fill(null);
    }
}