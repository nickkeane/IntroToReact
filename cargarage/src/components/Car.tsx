import React from 'react';

interface ICarProps {
    year: number;
    make: string;
    model: string;
}

interface ICarState {
    
}

export class CCar extends React.Component<ICarProps, ICarState> {
    render() {
        return (
            <div>
                {this.props.year} {this.props.make} {this.props.model}
            </div>
        )
    }
}