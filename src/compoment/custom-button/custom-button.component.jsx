import React from 'react';

import './custom-button.component.scss';

const CustomButton = ({ children,inverted, ...otherProps }) => (
  <button className={`custom-button ${inverted?'inverted':""}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
