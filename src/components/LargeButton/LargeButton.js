import React from 'react';
import Button from '../Button/Button';

const largeButton = (props) => (
    <button className="btnlarge" onClick={props.onButtonPress}>
        {props.children}
    </button>
);

export default largeButton;