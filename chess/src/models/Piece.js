export const pieceColor = {
    white: 0,
    black: 1
};

export const pieceType = {
    king: 0,
    queen: 1,
    rook: 2,
    bishop: 3,
    knight: 4,
    pawn: 5
};


export default class Piece {
    loc = [0, 0];
    color = PieceColor.White;
    type = PieceType.Black;

    isRemoved = false;

    constructor(loc, color, type) {

    }
};