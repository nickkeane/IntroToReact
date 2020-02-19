import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from './components/Toolbar';
import { Movie } from './components/Movie';
import { ImdbAPI } from './api/ImdbAPI'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        let api = new ImdbAPI();
        let data = await api.testMadMax();
        if (data)
            this.setState({movie: data});
        else
            this.setState({movie: null});
    }

    render() {
        return (
            <div>
                <Toolbar />
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));