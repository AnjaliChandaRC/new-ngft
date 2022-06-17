import React from "react";
import CelebrityImg from "../assets/image/celebrity.png";
function Celebrity() {
  return (
    <>
      <section className="py-5 mt-minus bg_black">
        <div className="container py-sm-5">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
              <h4 className="main_heading">
                CELEBRITY <span className="d-block">COLLABORATIONS</span>
              </h4>
              <p className="main_para">
                We are always looking for mutually beneficial partnerships and
                collaborations.
              </p>
              <p className="main_para">
                If you are a company,celebrity or influencer interested in
                collaborating with us, contact us on email :
                contact@NGFTofficial.com
              </p>
            </div>
            <div className="col-sm-10 col-lg-3 m-auto">
              <div className="">
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
              <div className="">
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
              <div className="">
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
            </div>
            <div className="col-sm-10 col-lg-3 m-auto">
              <div>
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
              <div>
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
              <div>
                <img
                  className="w-100 mt-4 mt-lg-0"
                  src={CelebrityImg}
                  alt="celebrity"
                />
                <p className="font_sm fw_semibold ff_kanit white text-center text-lg-start">
                  CHARLES LECLERC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Celebrity;
