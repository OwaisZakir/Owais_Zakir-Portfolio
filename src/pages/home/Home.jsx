import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineHome } from "react-icons/md";
import { LuAlignRight } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DownloadCv from "../../components/header/ui/downloadCv/downloadCv";

function Home() {
  const introRef = useRef(null);
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.from(introRef.current, {
      opacity: 0,
      duration: 2.5,
      ease: "bounce.out",
      x: -200,
    });
    gsap.from(menuRef.current, {
      opacity: 0,
      duration: 2.5,
      ease: "bounce.out",
      x: 200,
    });
  }, []);
  return (
    <Container className="pt-lg-5 h-screen">
      <Row>
        <Col className="d-flex justify-content-between align-items-center ">
          <Button
            ref={introRef}
            className=" mt-2 mb-5 btn px-3 fs-6 text-center rounded-5 border-2 border-white bg-transparent"
          >
            <MdOutlineHome className="fs-4 mb-1" />
            <span className="mt-5 "> Introduction</span>
          </Button>
          <Button
            ref={menuRef}
            className=" mt-2 mb-5 btn  fs-6 text-center rounded-5 border-2 border-white bg-transparent"
          >
            <LuAlignRight className="fs-4 mb-1" />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="main-title d-flex flex-column gap-4">
            <div className="main-heading">
              <h1 className="font-monospace display-3 fw-semibold">
                {" "}
                Hello! I'm
                {" <"}
                <span className="text-primary border-2 border-bottom ">
                  <span>Owais</span> <span>Zakir</span>
                </span>
                /{">"},
              </h1>
              <h1 className="fw-bold">
                A <span className="text-primary">Front-End Developer</span>
              </h1>
            </div>
            <div className="pera ">
              <p className="fs-2 text-capitalize text-tertiary">
                I build <span className="text-white fw-medium">responsive</span>
                , performance{" "}
                <span className="text-white fw-medium">driven</span> websites
                and enjoy{" "}
                <span className="text-white fw-medium">
                  {" "}
                  turning ideas into code.
                </span>
              </p>
            </div>
            <div className="action ">
              <DownloadCv />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
