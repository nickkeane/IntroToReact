import React from 'react';

import Car from '../models/Car';

export interface ICCarProps {
    car: Car;
}

export interface ICCarState {

}

export default class CCar extends React.Component<ICCarProps, ICCarState> {
    render() {
        return (
            <div>
                {this.props.car.year} {this.props.car.make} {this.props.car.model}
            </div>
        )
    }
}