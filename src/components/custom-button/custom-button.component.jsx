import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherpops }) => (
  <button className="custom-button" {...otherpops}>
    {children}
  </button>
);

export default CustomButton;
