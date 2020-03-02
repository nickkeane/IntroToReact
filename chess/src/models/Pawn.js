import Piece, { pieceColor, pieceType } from './Piece'

export default class King extends Piece {
    constructor(color) {
        super(color, PieceType.King);
    }

    isMovePossible(src, dest) {
        const grid = [
            [-1, -1], [0, -1], [1, -1]
        ]

        // TODO: First move off grid can be 2
        grid = grid.map((pos, i) => color === PieceColor.White ? [pos[0], -pos[1]] : pos);

        return grid
            .map((pos, i) => [src[0] + pos[0], src[1] + pos[1]])
            .filter((pos, i) => dest[0] === pos[0] && dest[1] === pos[1])
            .length >= 1;
    }

    getPath(src, dest) {
        return [];
    }
}