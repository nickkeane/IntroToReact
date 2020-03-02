import Piece, { pieceColor, pieceType } from './Piece'

export default class Queen extends Piece {
    constructor(color) {
        super(color, PieceType.Queen);
    }

    isMovePossible(src, dest) {
        const grid = [
            [-1, -1], [0, -1], [1, -1],
            [-1,  0], [0,  0], [1,  0],
            [-1,  1], [0,  1], [1,  1],
        ]

        return grid.map((pos, i) => { 
            if (pos[0] === 0 && pos[1] === 0)
                return [[src[0] + pos[0], src[1] + pos[1]]];
            
            let spots = [];
            for (let j = 0; j < 8; ++j)
                spots.push([pos[0] * j, pos[1] * j]);
            return spots.map((obj, i) => [src[0] + obj[0], src[1] + obj[1]]);
        }).filter((pos, i) => dest[0] === pos[0] && dest[1] === pos[1])
        .length >= 1;
    }

    getPath(src, dest) {
        return [];
    }
}