import React, { useState, useEffect } from "react";
import bgimage from "./assets/background_img.png";
import logoimg from "./assets/logo_1.png";
import helthimg from "./assets/health_1.png";
import { Button, Input, Form } from "antd";
import Newstate from "./wrist_band";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const states = {
  input: "input",
  result: "result",
  continue: "continue",
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [patientname, setPatientname] = useState("");
  const [currentState, setCurrentState] = useState(states.input);
  const [isKioskMode, setIsKioskMode] = useState(false);
  const [startDragPoint, setStartDragPoint] = useState({ x: 50, y: 50 });
  const [endDragPoint, setEndDragPoint] = useState({ x: 30, y: 30 });
  /**
   *
   *
   *
   * @param {*} e
   */

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  /**
   * @
   */
  const handleSubmit = () => {
    console.log(inputValue);
    const patientname = "ROBERT"; // Replace this with your logic to fetch the name based on inputValue
    setPatientname(patientname);
    setCurrentState(states.result);
  };

  const handleContinueClick = () => {
    setCurrentState(states.continue);
  };
  const enterKioskMode = () => {
    setCurrentState(states.input);
    setIsKioskMode(true);
  };

  const handleDragStart = (event) => {
    // Store the starting point when dragging starts
    setStartDragPoint({ x: event.clientX, y: event.clientY });
  };

  const handleDragEnd = (event) => {
    // Store the ending point when dragging ends
    setEndDragPoint({ x: event.clientX, y: event.clientY });

    // Calculate the distance dragged (optional)
    const distanceDraggedX = endDragPoint.x - startDragPoint.x;
    const distanceDraggedY = endDragPoint.y - startDragPoint.y;
    console.log("Distance dragged (X, Y):", distanceDraggedX, distanceDraggedY);

    // Now, you can use the startDragPoint and endDragPoint for further processing
    console.log("Starting point:", startDragPoint);
    console.log("Ending point:", endDragPoint);
  };

  const handleDrag = (event) => {
    console.log({ event });
    event.preventDefault();
    const dragThreshold = 20;
    const distanceX = event.clientX - startDragPoint.x;
    const distanceY = event.clientY - startDragPoint.y;

    // Determine if the drag is primarily horizontal or vertical based on the distance comparison
    if (
      Math.abs(distanceX) < dragThreshold ||
      Math.abs(distanceY) < dragThreshold
    ) {
      // Only consider it a valid drag if the movement is significant enough
      console.log("Valid Drag");
      if (isKioskMode && currentState === states.input) {
        setIsKioskMode(!isKioskMode);
      }
    } else {
      // Ignore the drag event if it's not significant enough
      console.log("Ignored Drag");
    }
  };

  const isInputEmpty = inputValue.trim() === "";

  // useEffect(() => {
  //   if (currentState === states.continue) {
  //     const timeoutId = setTimeout(() => {
  //       setCurrentState(states.input);
  //     }, 5000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [currentState]);

  const renderContent = () => {
    switch (currentState) {
      case states.input:
        return (
          <div
            className={`drag-container ${
              isKioskMode ? "drag-container-kiosk-mode" : ""
            }`}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
             onDrag={handleDrag}
            draggable="false"
          >
            <div
              className="main_container"
              style={{
                backgroundImage: `url(${bgimage} )`,
                margin: 0,
              }}
            >
              <div className="container_1">
                <Form className="form">
                  <h4 className="prevent-select">
                    ENTER YOUR NURA ID OR BOOKING ID
                  </h4>
                  <Form.Item>
                    <Input
                      className="input"
                      placeholder="ENTER YOUR ID"
                      value={inputValue}
                      onChange={handleInputChange}
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      block
                      type="primary"
                      htmlType="submit"
                      onClick={handleSubmit}
                      disabled={isInputEmpty}
                      className="btn"
                    >
                      SEARCH
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="container_2">
                <div className="logo_container">
                  <img src={logoimg} className="img" alt="logo_pic" />
                </div>
                <div className="health_container">
                  <img src={helthimg} className="health_img" alt="health_pic" />
                </div>
                <div className="btn_kiosk">
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "130px",
                      height: "45px",
                      //  position:"fixed",
                      // position: "absolute",
                      bottom: 0,
                      right: 0,
                    }}
                    onClick={enterKioskMode}
                    disabled={isKioskMode}
                  >
                    Enter Kiosk Mode
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      case states.result:
        return (
          <div
            className="main_container"
            style={{
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <div className="container_1">
              <Form className="form_result">
                <Form.Item>
                  <Input
                    className="input"
                    placeholder="ENTER YOUR ID"
                    value={inputValue}
                    onChange={handleInputChange}
                  ></Input>
                  <p className="font-color">NAME:</p>
                  <p className="font-color">{patientname}</p>

                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    onClick={handleContinueClick}
                    className="btn"
                  >
                    CONTINUE
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="container_2">
              <div className="logo_container">
                <img src={logoimg} className="img" alt="logo_pic" />
              </div>
              <div className="health_container">
                <img src={helthimg} className="health_img" alt="health_pic" />
              </div>
            </div>
          </div>
        );
      case states.continue:
        return <Newstate />;
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
}

export default App;
