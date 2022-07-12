import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);
  return (
    <div>
      {viewportWidth > 767 && (
        <nav>
          <div className="nav-left">
            <div>HOME</div>
            <div>CONTACT</div>
          </div>

          <div className="nav-right">
            <div>
              <button>LOGIN</button>
            </div>
            <div>
              <button>SIGN UP</button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
