import React from 'react'

export class Checker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            isBlack: false,
            isKing: false,
            pos: [0, 0]
        }
    }

    kingMe() {
        this.setState({isKing: true});
    }

    move() {

    }

    jump() {
        // Check for additional moves
    }

    render() {
        return (
            <div>CheckerPiece</div>
        )
    }
}