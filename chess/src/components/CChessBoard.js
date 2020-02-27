import React from 'react';

import { CBlock } from './CBlock';

export class CChessBoard extends React.Component {
    constructor(props) {
        super(props);

        let board = new Array(8);
        for (let i = 0; i < 8; ++i)
            board[i] = new Array(8).fill(null);

        this.state = {
            board: board
        };
    }
    render() {
        let pieces = {
            wKing: '&#9812;'
        };

        let sizeRange = [...Array(8).keys()];
        const cbHeaders = "ABCDEFGH";

        let topHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);
        let botHeader = cbHeaders.split('').map((o, i) => <div className="cb-header-inner" key={i}>{o}</div>);

        let squares = new Array(sizeRange.length * sizeRange.length).fill(0);
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