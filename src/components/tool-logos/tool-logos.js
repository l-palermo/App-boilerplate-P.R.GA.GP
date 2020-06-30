import React from "react";

import logo from "../../assets/pnpm.png";
import "./tool-logos.css";

const ToolLogos = () => {
  return <img data-testid="tool-logos" className="logo" src={logo} alt="image" />;
};

export default ToolLogos;
