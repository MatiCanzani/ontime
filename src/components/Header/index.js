import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const handleClick = (id) => {
  navigate(`#${id}`);
};

const Header = () => {
  return (
    <div className="container">
      <div className="Logo">
        <Link to="/">OnTime</Link>
      </div>
      <div className="Navigation">
        <AnchorLink to="/#works" title="Works" stripHash>
          Works
        </AnchorLink>
        <AnchorLink to="/#about" title="About" stripHash>
          About
        </AnchorLink>
        <AnchorLink to="/#contact" title="Contact" stripHash>
          Contact
        </AnchorLink>
      </div>
    </div>
  );
};

export default Header;
