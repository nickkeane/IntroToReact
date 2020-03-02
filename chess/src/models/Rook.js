import Piece, { pieceColor, pieceType } from './Piece'

export default class Rook extends Piece {
    constructor(color) {
        super(color, PieceType.Rook);
    }

    isMovePossible(src, dest) {
        const grid = [
                      [0, -1],
            [-1,  0], [0,  0], [1,  0],
                      [0,  1]
        ]
        const extrusion = 8; // How far to extrude directions outwards?

        return grid.map((off, i) => {
            // center 
            if (off[0] === 0 && off[1] === 0)
                return [[src[0] + off[0], src[1] + off[1]]];
            
            // sides and angles
            let spots = [];
            for (let j = 0; j < extrusion; ++j)
                spots.push([off[0] * j, off[1] * j]);
            return spots.map((obj, i) => [src[0] + obj[0], src[1] + obj[1]]);
        }).filter((pos, i) => {
            let match = false;
            for (let pos2 of pos) { 
                if (dest[0] === pos2[0] && dest[1] === pos2[1]) {
                    match = true;
                    break;
                }
            }
            return match;
        })
        .length >= 1;
    }

    getPath(src, dest) {
        return [];
    }
}