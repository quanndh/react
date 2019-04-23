import React, { Component } from 'react';
import config from "../config";

class GirlImage extends Component {
    render() {
        const {img} = this.props;
        return (
            <div className="col 3">
                <img 
                    className="img-fluid"
                    src={config.rootPath + img.imageUrl} 
                    alt={img.title} />
                <h4>{img.title}</h4>
                <p>{img.description}</p>
            </div>
        );
    }
}

export default GirlImage;
