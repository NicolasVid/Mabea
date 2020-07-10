import React from 'react';

import './DrawerToogleButton.css';

const drawerToggleButton = props => (
    <button className="toogle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default drawerToggleButton;