import React from 'react';
import "./chip.css"

const Chip = (props) => {
  const {content, status} = props;
  return (
    <div className= {`chip-bg ${status}`} >
      {content}
    </div>
  );
}

export default Chip;