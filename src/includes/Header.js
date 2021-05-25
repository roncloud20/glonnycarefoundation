import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Styles.css";
import logo from "../photos/translogo.png";
import { motion } from "framer-motion";
import { Carousel, Menu, Dropdown } from "antd";
import Block from "../photos/menu.svg";

function Header() {
  const hist = useHistory();

  const menu = (
    <Menu>
      <Menu.Item>
        <a className="AboutOption">Meet the Team</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Founder</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Meet the team</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Contact us</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Donate to us</a>
      </Menu.Item>
    </Menu>
  );

  const blockOption = (
    <Menu>
      <Menu.Item>
        <a className="AboutOption">Project</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">About</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Contact</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Founder</a>
      </Menu.Item>
      <Menu.Item>
        <a className="AboutOption">Donate to us</a>
      </Menu.Item>
    </Menu>
  );

  const HeaderOptionsVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 2,
        type: "string",
      },
    },
  };

  const DropHeadVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 2,
      },
      hover: {
        opacity: 0.8,
        color: "rgb(216, 69, 10)",
      },
    },
  };

  const HeaderOption = () => {
    return (
      <center>
        <div className="HeaderOption">
          <Link to="/" tyle={{ textDecoration: "none" }}>
            <img src={logo} alt="" className="Logo" />
          </Link>
          <div className="HeaderOptionLink">
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
            <a>PROJECT</a>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <a>ABOUT</a>
            </Dropdown>
            <a>CONTACT</a>
            <button
              onClick={() => {
                hist.push("/payment");
              }}
            >
              DONATE
            </button>
          </div>
          <div className="Block">
            <Dropdown overlay={blockOption} placement="bottomLeft" arrow>
              <img src={Block} alt="" />
            </Dropdown>
          </div>
        </div>
      </center>
    );
  };

  const FirstCarosel = ({ headerTitle, headerStory }) => {
    return (
      <div className="Header">
        <motion.div
          variants={HeaderOptionsVariants}
          animate="visible"
          initial="hidden"
        ></motion.div>
        <motion.center
          className="theStory"
          variants={DropHeadVariants}
          initial="hidden"
          animate="visible"
        >
          <h1>{headerTitle}</h1>
          <h2>{headerStory}</h2>
        </motion.center>
        <motion.div
          variants={buttonHolderVariants}
          initial="hidden"
          animate="visible"
          className="headerButtonHolder"
        >
          <motion.button className="b1" whileHover={{ opacity: 0.8 }}>
            FOUNDATION
          </motion.button>
          <motion.button className="b2" whileHover={{ opacity: 0.8 }}>
            NETWORK
          </motion.button>
        </motion.div>
      </div>
    );
  };

  const buttonHolderVariants = {
    hidden: {
      opacity: 0.5,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
  };

  return (
    <div style={{ background: "none" }}>
      <HeaderOption />
      <Carousel autoplay>
        <FirstCarosel
          headerTitle="loren ipson"
          headerStory="whatever you find yourself doing do it with all deligence"
        />
        <FirstCarosel
          headerTitle="SEcond carosel header"
          headerStory="whatever you find yourself doing do it with all deligence"
        />
        <FirstCarosel
          headerTitle="Third carosel header"
          headerStory="whatever you find yourself doing do it with all deligence"
        />
        <FirstCarosel
          headerTitle="fourth carosel header"
          headerStory="whatever you find yourself doing do it with all deligence"
        />
        <FirstCarosel
          headerTitle="firth carosel header"
          headerStory="whatever you find yourself doing do it with all deligence"
        />
      </Carousel>
    </div>
  );
}

export default Header;
