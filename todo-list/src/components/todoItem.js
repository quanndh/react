import React, { Component } from 'react';
import "./TodoItems.css"
import classNames from "classnames"
import checkImg from '../img/check.svg';
import checkDone from '../img/check-done.svg';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() { 
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isComplete) {
            url = checkDone;
        }
    
        return (  
            <div className={classNames('TodoItem', {
                'TodoItem-complete' : item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32} />
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
}
 
export default TodoItem;