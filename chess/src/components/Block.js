import React from 'react';

export class Block extends React.Component {
    render() {
        return <div className={"block shade-" + this.props.shadeType}>T</div>;
    }
}