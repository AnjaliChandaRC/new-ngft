import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero_bg">
        <div className="container d-flex justify-content-center align-items-end flex-grow-1">
          <div className="row">
            <div className="col mb-2">
              <div className="text-center">
                <button className="common_btn">Mi nt</button>
              </div>
              <div className="hero_text d-sm-flex my-4 my-sm-5">
                <div className="text-center me-sm-5">
                  <h6 className="font_lg fw_bold">PRESALE</h6>
                  <p className="font_lg mb-0">February 22nd, 9PM EST</p>
                  <p className="font_lg fw_medium">0 Days 00:00:00</p>
                </div>
                <div className="text-center ms-sm-5">
                  <h6 className="font_lg fw_bold">PRESALE</h6>
                  <p className="font_lg mb-0">February 22nd, 9PM EST</p>
                  <p className="font_lg fw_medium">0 Days 00:00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
