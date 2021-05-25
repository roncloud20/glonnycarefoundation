import React, { useState } from "react";
import { Modal, Button, Carousel } from "antd";
import "./Styles.css";

const ModalComp = ({
  img1,
  img2,
  img3,
  img4,
  modalStory,
  title,
  onlyModalText,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [carousel, setCarousel] = useState(true);

  const flipCarosel = (carousel) => {
    setCarousel(!carousel);
  };

  const contentStyle = {
    height: "200px",
    width: "200px",
    color: "#fff",
    background: "#fff",
    objectFit: "cover",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {carousel ? (
        <>
          <Button type="primary" onClick={showModal}>
            Learn More
          </Button>
          <Modal
            title={title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <center>
                <Carousel autoplay>
                  <div>
                    <h1 className="modalImageStyle">
                      <img alt="" style={contentStyle} src={img1} />
                    </h1>
                  </div>
                  <div>
                    <h1 className="modalImageStyle">
                      <img alt="" style={contentStyle} src={img2} />
                    </h1>
                  </div>
                  <div>
                    <h1 className="modalImageStyle">
                      <img alt="" style={contentStyle} src={img3} />
                    </h1>
                  </div>
                  <div>
                    <h1 className="modalImageStyle">
                      <img alt="" style={contentStyle} src={img4} />
                    </h1>
                  </div>
                </Carousel>
              </center>
              <p>{modalStory}</p>
            </div>
          </Modal>
        </>
      ) : (
        <p> {onlyModalText}</p>
      )}
    </>
  );
};

export default ModalComp;
