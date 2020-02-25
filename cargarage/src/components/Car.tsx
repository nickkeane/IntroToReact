import React from 'react';
import { Car } from '../models/Car';

interface ICarProps {
    car: Car;
}

interface ICarState {

}

export class CCar extends React.Component<ICarProps, ICarState> {
    render() {
        return (
            <div>
                {this.props.car.year} {this.props.car.make} {this.props.car.model}
            </div>
        )
    }
}