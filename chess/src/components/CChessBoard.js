import React from 'react';

import { CBlock } from './CBlock';
import { ChessBoard } from '../models/ChessBoard';

export class CChessBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            board: new ChessBoard(), 
        };
    }

    render() {
        const cbHeaders = "ABCDEFGH";
        const boardDims = this.state.board._board.length * this.state.board._board.length;

        let topHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        let botHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        let squares = new Array(boardDims).fill(0);
        squares = squares.map((o, i) => <div className="cb-square" key={i}>&#9812;</div>);

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