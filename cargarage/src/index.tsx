import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';

import { CCar } from './components/Car';
import { Car } from './models/Car';

class App extends React.Component {
    componentDidMount() { 
        $('#myTest').addClass('font-tw');
    }

    render() {
        return (<div>
            <CCar car={new Car(2015, 'Buick', 'Verano')} />
            <div id="myTest">Testing Fonts and jQuery</div>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));