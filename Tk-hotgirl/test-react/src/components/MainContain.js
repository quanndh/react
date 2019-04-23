import React, { Component } from 'react';
import GirlImage from "./GirlImg";

class mainContain extends Component {
    render() {
        const {img} = this.props;
        return (
            <div className="container">
                <div className="row">
                    { img.length > 0 && 
                        img.map(img => <GirlImage img={img} key={img._id}/>)                   
                    }
                </div>
               
            </div>
        );
    }
}

export default mainContain;
