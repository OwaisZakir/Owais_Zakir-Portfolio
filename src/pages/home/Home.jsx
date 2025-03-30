import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineHome } from "react-icons/md";
import { LuAlignRight } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DownloadCv from "../../components/header/ui/downloadCv/downloadCv";
import ConnectBtn from "../../components/header/ui/connectBtn/ConnectBtn";
import TypingEffect from "../../components/typingEffect/TypingEffect";
import GlitchText from "../../components/Ui/GlitchText";

function Home() {
  const refs = useRef([]);

  const elements = [
    {
      ref: "introRef",
      icon: <MdOutlineHome className="fs-4 mb-1" />,
      text: "Introduction",
    },
    { ref: "menuRef", icon: <LuAlignRight className="fs-4 mb-1" />, text: "" },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(refs.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container className="pt-lg-5 h-screen">
      {/* Buttons */}
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          {elements.map((el, index) => (
            <Button
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="mt-2 mb-5 btn px-3 fs-6 text-center rounded-5 border-2 border-white bg-transparent"
            >
              {el.icon}
              <span className="mt-5">{el.text}</span>
            </Button>
          ))}
        </Col>
      </Row>

      {/* Content Section */}
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div
            ref={(el) => (refs.current[2] = el)}
            className="main-title d-flex flex-column gap-4"
          >
            <div className="main-heading">
              <GlitchText />
              <TypingEffect />
            </div>
            <div className="pera">
              <p className="fs-2 text-capitalize text-tertiary">
                {[
                  { text: "I build ", highlight: "responsive" },
                  { text: "performance ", highlight: "driven" },
                  {
                    text: "websites and enjoy ",
                    highlight: "turning ideas into code.",
                  },
                ].map((item, index) => (
                  <span key={index}>
                    {item.text}
                    <span className="text-white fw-medium">
                      {item.highlight}
                    </span>
                  </span>
                ))}
              </p>
            </div>
            <div className="action d-flex gap-5">
              <ConnectBtn />
              <DownloadCv />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
