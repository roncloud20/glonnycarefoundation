import "./Styles.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import logo2 from "../photos/gcflogo.png";
import ModalComp from "./Modal";
import outreact1 from "../photos/outreact1 (1).jpeg";
import outreact2 from "../photos/outreact1 (2).jpeg";
import outreact3 from "../photos/outreact2.jpeg";
import outreact4 from "../photos/outreact3.jpeg";
import skill1 from "../photos/skill1.jpeg";
import skill2 from "../photos/skill2.jpeg";

import skill3 from "../photos/skill3.jpeg";

import skill4 from "../photos/skill4.jpeg";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Card = ({
    src,
    story,
    title,
    img1,
    img2,
    img3,
    img4,
    modalTitle,
    modalStory,
  }) => {
    return (
      <div className="card">
        <img src={src} alt="" />
        <h2>{title}</h2>
        <p>{story}</p>

        <ModalComp
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          modalStory={modalStory}
          title={modalTitle}
        />
      </div>
    );
  };

  const TeamCard = ({ src }) => {
    return (
      <motion.div className="TeamCardContainer">
        {/* <div> */}
        <img
          src={src}
          alt=""
          style={{ outline: "none" }}
          className="TeamCardContainerImage"
        />
        {/* </div> */}
        <h1>Full name</h1>
        <h2>position</h2>
      </motion.div>
    );
  };

  const PartnerCard = ({ src }) => {
    return (
      <div className="PartnerCard">
        <img src={src} alt="" />
        <h1>name </h1>
      </div>
    );
  };

  const FooterContact = ({ title, story }) => {
    return (
      <div className="FooterContact">
        <h1>{title}</h1>
        <p>{story}</p>
      </div>
    );
  };

  const ProjectDivVariants = {
    hidden: {
      opacity: 0.4,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const AboutDivVariants = {
    hidden: {
      opacity: 0.2,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 5,
        type: "spring",
        when: "beforeChildren",
      },
    },
  };

  const TeamVariants = {
    hidden: {
      y: 20,
      opacity: 0.2,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        type: "spring",
        mass: 5,
        damping: 2,
        stiffness: 200,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: -50,
    },
    visible: {
      y: 0,
      transition: {
        duration: 5,
        stiffness: 400,
      },
    },
  };

  return (
    <div className="ParentDiv">
      <Header />
      <main>
        <motion.div className="projects">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            trasnsition={{ duration: 3, delay: 0.3 }}
            className="AboutUsHeader"
          >
            Projects
          </motion.h2>
          <motion.div
            className="cardList"
            variants={ProjectDivVariants}
            initial="hidden"
            animate="visible"
          >
            <Card
              src={logo2}
              title="Sport Event"
              modalTitle="Sport event"
              story="Lorem Ispum vex les una glue make dat use of files make use of file 
                make use of that cope trape copy vex les una glue make dat use 
                of files make use of file make use of that cope trape copy"
              img1={logo2}
              modalStory="loren ipson shit"
            />

            <Card
              src={logo2}
              title="Outreach"
              story="Lorem Ispum vex les una glue make dat use of files make use of file 
               ake use of that cope trape copy vex les una glue make dat use 
               "
              title="outreact"
              img1={outreact1}
              img2={outreact2}
              img3={outreact3}
              img={outreact4}
              modalTitle="outreact"
              modalStory="this is real in some loren ipson shit right here ake use of that cope trape copy vex les una glue make dat use 
                of files make use of file make use of that cope trape  "
            />
            <Card
              title="skill aquisition"
              modalTitle="skill aquisition"
              src={logo2}
              story="   Lorem Ispum vex les una glue make dat use of files make use of file 
                make use of that cope trape copy vex les una glue make dat use 
                of files make use of file make use of that cope trape copy"
              img1={skill1}
              img2={skill2}
              img3={skill3}
              img={skill4}
              modalStory="this is real in some loren ipson shit right here ake use of that cope trape copy vex les una glue make dat use 
                of files make use of file make use of that cope trape  "
            />
          </motion.div>
        </motion.div>
        <motion.center
          variants={AboutDivVariants}
          animate="visible"
          initial="hidden"
        >
          <h2 className="AboutUsHeader">About Us</h2>
        </motion.center>
        <motion.center
          variants={AboutDivVariants}
          animate="visible"
          initial="hidden"
        >
          <motion.div
            variant={AboutDivVariants}
            initial="hidden"
            animate="visible"
            className="AboutUs"
          >
            <motion.div className="sideImage">
              <img src={logo2} alt="" />
            </motion.div>
            <motion.div className="Aboutglonny">
              <p>
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
              </p>

              {/* <button> */}
              <ModalComp
                modalTitle="About us"
                modalStory="t here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your villag"
              />
              {/* </button> */}
            </motion.div>
          </motion.div>
        </motion.center>
        <center>
          <h2 className="AboutUsHeader">Founder</h2>
        </center>
        <motion.center
          variants={AboutDivVariants}
          animate="visible"
          initial="hidden"
        >
          <div className="AboutUs">
            <motion.div className="Aboutglonny">
              <p>
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
                Lorem ispun laravell don use all the technology wa we never see
                before base on one or two polo polo we gather dan the game doing
                shit here and there like say na we get Nigeria their father left
                leg and yansh abeg go smoke shit for your village sa ba pour
              </p>
            </motion.div>
            <div className="sideImage">
              <img src={logo2} alt="" />
            </div>
          </div>
        </motion.center>
        <center>
          <h2 className="AboutUsHeader">Team</h2>
        </center>
        <center>
          <motion.div
            variants={TeamVariants}
            initial="hidden"
            animate="visible"
            className="TeamCardHolder"
          >
            <div variants={childVariants} initial="hidden" animate="visible">
              <TeamCard />
            </div>{" "}
            <div variants={childVariants} initial="hidden" animate="visible">
              <TeamCard />
            </div>
            <div variants={childVariants} initial="hidden" animate="visible">
              <TeamCard />
            </div>
            <div variants={childVariants} initial="hidden" animate="visible">
              <TeamCard />
            </div>
          </motion.div>
        </center>
        <center>
          <h2 className="AboutUsHeader">Partners</h2>
        </center>
        <center>
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 0.5 }}
            className="TeamCardHolder"
          >
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
          </motion.div>
        </center>
        <div className="FooterMain">
          <center>
            <h1 className="AboutUsHeader">Contacts</h1>

            <div className="Footer">
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 3,
                  damping: 9,
                  mass: 3,
                  stiffness: 600,
                }}
                className="FooterContactContainer"
              >
                <FooterContact
                  title="Office Address"
                  story="loren ispson bla bla bal bla balba b ieo jwoineow "
                />
                <FooterContact
                  title="Phone"
                  story="loren ispson bla bla bal bla balba b ieo jwoineow "
                />
                <FooterContact
                  title="E-Mails"
                  story="loren ispson bla bla bal bla balba b ieo jwoineow  hteioown and d hie lorin isps oe ioipen niiei eigoos he noef oefm ionnnwn "
                />
                <FooterContact
                  title="Social Media"
                  story="loren ispson bla bla bal bla balba b ieo jwoineow "
                />
              </motion.div>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 3,
                  duration: 2,
                  damping: 10,
                  mass: 1,
                  stiffness: 100,
                }}
                className="FooterContactContainer"
              >
                <input
                  className="FooterInputName"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  className="FooterInputName"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <textarea
                  className="FooterInputMessage"
                  id="txtid"
                  name="message"
                  rows="4"
                  cols="50"
                  maxlength="200"
                  placeholder="Message"
                  value={message}
                  onChangeText={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <button className="b2">Send</button>
              </motion.div>
            </div>
          </center>
        </div>
      </main>
    </div>
  );
}

export default Home;
