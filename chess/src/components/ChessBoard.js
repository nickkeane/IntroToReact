import React from 'react';

import { Block } from './Block';

export class ChessBoard extends React.Component {
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
        let sizeRange = [...Array(8).keys()];
        const cbHeaders = "ABCDEFGH";

        let topHeader = cbHeaders.split('').map((o, i) => <div className="cb-square-inner" key={i}>{o}</div>);
        let botHeader = cbHeaders.split('').map((o, i) => <div className="cb-square-inner" key={i}>{o}</div>);

        let squares = new [sizeRange.length * sizeRange.length];
        squares = squares.map((o, i) => <div className="cb-square" key={i}></div>);

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

                <div style={{float: 'left'}}>
                    {sizeRange.map((y) => 
                    <div className="block-row"> {sizeRange.map((x) => {
                        // Generate cross-hatch coloration grid for elements
                        let shade;
                        if (x % 2 === 0)
                            shade = (y % 2) === 0 ? 'light' : 'dark';
                        else
                            shade = (y % 2) === 0 ? 'dark' : 'light';
                        return <Block shadeType={shade}/>;
                    })}
                    </div> )}
                </div>
                <div style={{float: 'left'}}></div>
                <div style={{textAlign: 'left'}}>Score: 0</div>
                <div style={{textAlign: 'left'}}>Turn: 0</div>
                <div style={{textAlign: 'left'}}>Last Move: (Piece)(0,0) to (Piece/Empty)(0,0)</div>
                <div style={{clear: 'both'}} />
            </div>
        )
    }
}