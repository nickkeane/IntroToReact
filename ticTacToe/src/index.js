import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
    return <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }

    render() {
        let sizeRange = [...Array(this.props.size).keys()];
        return (
            <div>
                {sizeRange.map((y) => <div className="board-row">{sizeRange.map((x) => this.renderSquare(y * 3 + x))}</div>)}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: new Array(9).fill(null),
                lastClickLoc: new Array(2).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const lastClickLoc = current.lastClickLoc.slice();

        lastClickLoc[0] = i % 3;
        lastClickLoc[1] = Math.floor(i / 3);

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                lastClickLoc: lastClickLoc
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            let desc;
            if (this.state.stepNumber === move)
                desc = move ? <b>Go to move #{move}</b> : <b>Go to game start</b>;
            else
                desc = move ? 'Go to move #' + move : 'Go to game start';
            let coords = <span></span>;
            if (move !== 0)
                coords = <span>({step.lastClickLoc[0]}/{step.lastClickLoc[1]})</span>;
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    {coords}
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner.shape;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            if (current.squares.filter((i) => i !== null).length === 9)
                status = 'Board full. Winner not determined.';            
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board size={3} squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {shape: squares[a], line: lines[i]};
        }
    }
    return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
