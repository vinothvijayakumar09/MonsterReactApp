import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div className="time">
                <p>hello {this.props.greeting}</p>
                 <p>hello {this.props.wish}</p>
            </div>
        );
    }
}

export default Hello;