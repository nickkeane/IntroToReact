import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';

class App extends React.Component {
    componentDidMount() { 
        $('#myTest').addClass('font-tw');
    }

    render() {
        return (<div id="myTest">Testing Fonts and jQuery</div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));