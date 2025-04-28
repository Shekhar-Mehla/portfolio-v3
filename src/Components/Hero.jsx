import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { motion } from "motion/react";
import TypeAnimation from "./TypoAnimation";
import img from "../assets/resumepick.png";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Hero = () => {
  const str = "i love coding";
  const arrayofString = [
    "i love coding",
    "i love too coding",
    "i love much coding",
  ];
  return (
    <Container id="hero" className="mt-3">
      <Row className=" d-flex  gap-2 align-items-center justify-content-center">
        <Col md={7} className="left-container ">
          <div className="left heading-font d-flex relative  align-items-center">
            <div className="fw-bolder  d-flex">
              Hi{" "}
              <motion.div className="" animate={{ rotate: 360 }}>
                <motion.div
                  animate={{ scale: 1.1, transition: { duration: 0.4 } }}
                >
                  👋
                </motion.div>
              </motion.div>
            </div>
            <div className="">
              <BiSolidQuoteSingleRight className="absolute comma"></BiSolidQuoteSingleRight>
            </div>
          </div>
          <div className="fw-bolder heading-font">i'M SHEKHAR SINGH</div>
          <div className="fw-bolder text-warning heading-font">
            Software Engeenier
          </div>
          <div className="fw-bolder ">
            <TypeAnimation></TypeAnimation>
          </div>
        </Col>

        <Col md={4} className="right ">
          <div className=" image-wraper   d-flex justify-content-center align-items-center ">
            <img
              className="resume-pick"
              style={{
                width: "100%",
                display: "block",
                height: "100%",
                objectFit: "cover",
              }}
              src={img}
            ></img>
            <motion.div
              initial={{ transform: "translateY(-10px)" }}
              animate={{ transform: "translateY(0px)" }}
              transition={{
                ease: ["easeIn", "easeOut"],
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute  react-icon"
            >
              <RiReactjsFill />
            </motion.div>
            <motion.div
              className="absolute  node-icon"
              initial={{ transform: -5 }}
              animate={{ transform: 10 }}
              transition={{
                type: "spring",
                duration: 2,
                repeat: Infinity,
                bounce: 1,
              }}
            >
              <FaNodeJs></FaNodeJs>
            </motion.div>
            <div className="absolute  mongo-icon">
              <SiMongodb></SiMongodb>
            </div>
            <div className="absolute bg-danger express-icon">
              <SiExpress></SiExpress>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
