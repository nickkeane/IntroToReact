import React from 'react';
import ReactDOM from 'react-dom';

import { CCar } from './components/Car';

class App extends React.Component {
    render() {
        return (<div><CCar year={2015} make={'Buick'} model={'Verano'} /></div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));