import React from "react";
import LogoImg from "../assets/image/logo.png";

const PreLoader = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center loading bg_black">
        <img className="proloader_img" src={LogoImg} />
      </div>
    </>
  );
};

export default PreLoader;
