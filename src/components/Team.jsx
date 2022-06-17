import React from "react";
import TeamOne from "../assets/image/team-1.png";
import TeamTwo from "../assets/image/team-2.png";
import TeamThree from "../assets/image/team-3.png";
import TeamFour from "../assets/image/team-4.png";
import { TwitterIcon } from "../common/Icons";
function Team() {
  return (
    <>
      <section className="py-5 mt-minus bg_black">
        <div className="container mb-sm-5 pb-sm-5">
          <div className="text-center">
            <h5 className="main_heading">Team</h5>
          </div>
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamOne} alt="team-1" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">B.165</h6>
              <p className="main_para">FOUNDER & DESIGNER</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamTwo} alt="team-2" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">
                ROBOTOM
              </h6>
              <p className="main_para">Co-Founder</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamThree} alt="team-3" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">
                OLDKID
              </h6>
              <p className="main_para">Co-Founder</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamFour} alt="team-4" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">HISAO</h6>
              <p className="main_para">WEB DESIGNER</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamTwo} alt="team-2" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">
                THOMAS
              </h6>
              <p className="main_para">TOKEN EXPERT</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-5 text-center">
              <img className="w-100 team_img" src={TeamThree} alt="team-3" />
              <h6 className="font_xl fw_semibold ff_kanit white mt-3">ALEC</h6>
              <p className="main_para">NFT EXPERT</p>
              <div>
                <a
                  href="https://twitter.com/"
                  className="social_icon"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
