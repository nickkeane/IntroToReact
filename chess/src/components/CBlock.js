import React from 'react';

export class CBlock extends React.Component {
    render() {
        return <div className={"block shade-" + this.props.shadeType}>T</div>;
    }
}