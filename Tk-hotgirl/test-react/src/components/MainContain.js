import React, { Component } from 'react';
import GirlImage from "./GirlImg";
import {Link} from "react-router-dom";

class mainContain extends Component {
    render() {
        const {img} = this.props;
        return (
            <div className="container">
                <div className="row">
                    { img.length > 0 && 
                        img.map(img => 
                            <div className="col-3" key={img._id}>
                                <Link to={`/images/${img._id}`}>
                                    <GirlImage img={img} />
                                </Link>
                            </div>
                        )                   
                    }
                </div>    
            </div>
        );
    }
}

export default mainContain;
