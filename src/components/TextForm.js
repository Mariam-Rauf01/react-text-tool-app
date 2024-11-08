import React, { useState, useEffect } from "react";
import { Tooltip, OverlayTrigger, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  // Effect to enable or disable buttons based on text length
  useEffect(() => {
    setIsTextEmpty(text.trim().length === 0);
  }, [text]);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    toast.success("Text converted to uppercase!");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    toast.success("Text converted to lowercase!");
  };

  const handleClearClick = () => {
    setText("");
    toast.info("Text cleared!");
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Text copied to clipboard!"))
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        toast.error("Failed to copy text. Please try again.");
      });
  };

  const handleCapitalizeClick = () => {
    const newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    toast.success("Text capitalized!");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    toast.success("Extra spaces removed!");
  };

  const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div
      className="container-fluid"
      style={{
        color: props.mode === "dark" ? "white" : "#042743",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: props.mode === "dark" ? "#042743" : "#f8f9fa",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <Card className="mb-4 shadow-sm" style={{ backgroundColor: props.mode === "dark" ? "#1c1c1c" : "#ffffff" }}>
            <Card.Body>
              <Card.Title className="mb-4 fs-5" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                {props.heading}
              </Card.Title>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
                  style={{
                    backgroundColor: props.mode === "dark" ? "lightgrey" : "white",
                    color: props.mode === "dark" ? "black" : "black",
                    resize: "both",
                    overflow: "auto",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  id="myBox"
                  rows="8"
                  placeholder="Enter text here"
                />
              </div>
            </Card.Body>
          </Card>

          <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center gap-3 mb-4">
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-uppercase">Convert text to uppercase</Tooltip>}>
              <Button variant="primary" onClick={handleUpClick} disabled={isTextEmpty}>
                Uppercase
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-lowercase">Convert text to lowercase</Tooltip>}>
              <Button variant="primary" onClick={handleLoClick} disabled={isTextEmpty}>
                Lowercase
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-clear">Clear the text area</Tooltip>}>
              <Button variant="primary" onClick={handleClearClick} disabled={isTextEmpty}>
                Clear
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-copy">Copy text to clipboard</Tooltip>}>
              <Button variant="primary" onClick={handleCopyClick} disabled={isTextEmpty}>
                Copy
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-capitalize">Capitalize the first letter of each word</Tooltip>}>
              <Button variant="primary" onClick={handleCapitalizeClick} disabled={isTextEmpty}>
                Capitalize
              </Button>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-extraSpaces">Remove extra spaces in your text</Tooltip>}>
              <Button variant="primary" onClick={handleExtraSpaces} disabled={isTextEmpty}>
                Remove Extra Spaces
              </Button>
            </OverlayTrigger>
          </div>

          <Card className="shadow-sm" style={{ backgroundColor: props.mode === "dark" ? "#1c1c1c" : "#ffffff" }}>
            <Card.Body className="text-center">
              <h3 className={props.mode === "dark" ? "text-light" : "text-dark"}>Your Text Summary</h3>
              <p className={props.mode === "dark" ? "text-light" : "text-dark"}>
                {wordCount} words and {text.length} characters
              </p>
              <p className={props.mode === "dark" ? "text-light" : "text-dark"}>{0.008 * wordCount} minutes read</p>
              <h3 className={props.mode === "dark" ? "text-light" : "text-dark"}>Preview</h3>
              <p className={props.mode === "dark" ? "text-light" : "text-dark"}>
                {text.trim().length > 0 ? text : "Enter your text to preview here"}
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default TextForm;
 


