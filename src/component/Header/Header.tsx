import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    // track viewport width
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <div>
      {viewportWidth < 1024 && (
        <header>
          <img
            src="images/logo.svg"
            alt="logo"
            width={viewportWidth < 768 ? "128" : "256"}
          />
          {viewportWidth < 768 && <MenuIcon />}
        </header>
      )}
    </div>
  );
};

export default Header;
