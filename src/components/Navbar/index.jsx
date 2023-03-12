import React from "react";
import { Button, duration } from "@mui/material";
import { m, AnimatePresence } from "framer-motion";

import "./styles/style.css";

export default function Navbar() {
  const [searchCollapsed, setSearchCollapsed] = React.useState(true);
  const handleSearchCollapse = () => {
    setSearchCollapsed(!searchCollapsed);
  };
  const inputVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const inputItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <nav>
      <div className="logo__container">
        <m.img
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          src="https://ik.imagekit.io/domsan/Logo_0vBSw9piY.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662803005580"
          alt="Playpoint Logo"
          loading="lazy"
        />
        <h1>Playpoint</h1>
      </div>

      <div className="utilities__container">
        <div className="search__container">
          <AnimatePresence>
            {!searchCollapsed && (
              <m.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                variants={inputVariants}
              >
                <m.input
                  variants={inputItem}
                  type="text"
                  placeholder="Search Marketplace, Users, Games..."
                />
              </m.div>
            )}
          </AnimatePresence>

          <m.div
            whileHover={{ rotate: 90 }}
            whileTap={{
              borderRadius: "50%",
            }}
          >
            <Button
              className="searchHandlerBtn"
              onClick={() => handleSearchCollapse()}
            >
              {searchCollapsed ? (
                <i className="ri-search-line"></i>
              ) : (
                <i className="ri-close-line"></i>
              )}
            </Button>
          </m.div>
          <m.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="signInBtn__container">
              <m.i
                whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.3 } }}
                className="ri-lock-2-line"
              ></m.i>{" "}
              <span>Sign In</span>
            </Button>
          </m.div>
        </div>
      </div>
    </nav>
  );
}
