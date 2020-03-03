import React from 'react';
import ReactDOM from 'react-dom';

import CCar from '../CCar'
import Car from '../../models/Car';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CCar car={new Car(2020, 'Ford', 'Fordmn')} />, div);
})