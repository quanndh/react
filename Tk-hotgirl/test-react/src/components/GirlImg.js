import React, { Component } from 'react';
import config from "../config";

class GirlImage extends Component {
    render() {
        const comment = this.props.img.comment ? this.props.img.comment.map(cmt => (
            <p>
                <span className="font-weight-bold">{cmt.createdBy.username}</span> : {" "} {cmt.content}    
            </p>)
        ) : "";
        const {img} = this.props;
        return (
                <div className="girl_image">
                    <img 
                        className="img-fluid"
                        src={config.rootPath + img.imageUrl} 
                        alt={img.title} />
                    <h4>{img.title}</h4>
                    <p>{img.description}</p>
                    {comment}
                </div>
        );
    }
}

export default GirlImage;
