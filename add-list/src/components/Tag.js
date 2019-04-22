import React, { Component } from 'react';

class Tag extends Component {
    render() {

        const {content} = this.props;

        return (
            <div >
                <p className="tag">{content}</p>
            </div>
        );
    }
}

export default Tag;
