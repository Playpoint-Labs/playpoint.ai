import React from "react";
import { Button } from "@mui/material";
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

  const [menuCollapsed, setMenuCollapsed] = React.useState(true);
  const handleMenuCollapse = () => {
    menuCollapsed
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
    setMenuCollapsed(!menuCollapsed);
  };

  return (
    <nav>
      <div className="menu__container">
        <m.div
          whileHover={{ scale: 1.1 }}
          onClick={() => handleMenuCollapse()}
          className="menuIcon"
        >
          <svg viewBox="0 0 64 48">
            <path
              class="MenuButton_shapeA__R8GEG"
              d="M.5,4C.5,2.07,2.07,.5,4,.5H60c1.93,0,3.5,1.57,3.5,3.5v30.34c0,.93-.37,1.82-1.03,2.47l-9.66,9.66c-.66,.66-1.55,1.03-2.47,1.03H4c-1.93,0-3.5-1.57-3.5-3.5V4Z"
            ></path>
            <path
              class="MenuButton_shapeB__D1sqd"
              d="M50.34,48H4c-2.21,0-4-1.79-4-4V4C0,1.79,1.79,0,4,0H60C62.21,0,64,1.79,64,4v30.34c0,1.07-.42,2.07-1.17,2.83l-9.66,9.66c-.76,.76-1.76,1.17-2.83,1.17ZM4,1c-1.65,0-3,1.35-3,3V44c0,1.65,1.35,3,3,3H50.34c.8,0,1.55-.31,2.12-.88l9.66-9.66c.57-.57,.88-1.32,.88-2.12V4c0-1.65-1.35-3-3-3H4Z"
            ></path>
          </svg>
          {!menuCollapsed ? (
            <i class="ri-eye-close-line"></i>
          ) : (
            <i className="ri-links-line"></i>
          )}
        </m.div>
        <Button onClick={() => handleMenuCollapse()}>
          {!menuCollapsed ? "Close Menu" : "Menu"}
        </Button>

        <AnimatePresence>
          {!menuCollapsed && (
            <m.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, y: -15 }}
              className="absoluteMenu__container"
            >
              <div className="titleMenuItems">
                <span>Explore</span>
                <span className="backlink">
                  Documentation <i className="ri-arrow-right-up-line"></i>
                </span>
                <span>Marketplace</span>
                <span className="backlink">
                  BLOG <i className="ri-arrow-right-up-line"></i>
                </span>
                <span>Leaderboard</span>
                <span>Discussion</span>
              </div>
              <div className="menuItems">
                <div className="menuLinkss">
                  <h2>LINKS</h2>
                  <ul>
                    <li>About</li>
                    <li>Resources</li>
                    <li>Careers</li>
                    <li>User Guide</li>
                    <li>FAQs</li>
                    <li className="backlink">
                      TERMS OF USE <i className="ri-arrow-right-up-line"></i>
                    </li>
                    <li className="backlink">
                      PRIVACY POLICY <i className="ri-arrow-right-up-line"></i>
                    </li>
                  </ul>
                </div>

                <div className="menuSocials">
                  <h2>SOCIAL</h2>
                  <ul>
                    <li>
                      <i className="ri-twitter-fill"></i> Twitter
                    </li>
                    <li>
                      <i className="ri-telegram-fill"></i> Telegram
                    </li>
                    <li>
                      <i className="ri-discord-fill"></i> Discord
                    </li>
                    <li>
                      <i className="ri-medium-fill"></i>Medium
                    </li>
                    <li>
                      <i className="ri-github-fill"></i> Github
                    </li>
                    <li>
                      <i className="ri-linkedin-fill"></i> Linkedin
                    </li>
                    <li>
                      <i className="ri-facebook-fill"></i> Facebook
                    </li>
                  </ul>
                </div>

                <div className="buyPPTT">
                  <h2>Purchase PPTT</h2>
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      <div className="logo__container">
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
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                }}
                className="ri-fingerprint-line"
              ></m.i>{" "}
              <span>Connect Wallet</span>
            </Button>
          </m.div>
        </div>
      </div>
    </nav>
  );
}
