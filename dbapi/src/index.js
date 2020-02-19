import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from './components/Toolbar';
import { Movie } from './components/Movie';
import { ImdbAPI } from './api/ImdbAPI'; 

class App extends Component {
    api = null;

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        this.api = new ImdbAPI();
        let data = await this.api.testMadMax();
        if (data)
            this.setState({movie: data});
        else
            this.setState({movie: null});
    }

    handleSearch(e, value) {
        // TODO: Implement API Calls
        if (this.api) {

        }
    }

    render() {
        return (
            <div>
                <Toolbar onClickSearch={this.handleSearch}/>
                <Movie movie={this.state.movie} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));