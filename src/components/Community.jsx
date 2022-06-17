import React from "react";
import CommunityImg from "../assets/image/Community.png";
import Discord from "../assets/image/discord.png";
function Community() {
  return (
    <>
      <section className="pb-5 py-lg-5 mt-minus bg_brown position-relative">
        <div className="position-absolute bottom-0 community_img d-none d-xxl-block">
          <img className="w-100" src={CommunityImg} alt="community" />
        </div>
        <div className="container py-xxl-5">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-xxl-3 text-center mt-5">
              <h4 className="font_2xl fw_semibold ff_kanit white">
                Join Our Community
              </h4>
              <div className="mt-3 mt-lg-5">
                <button className="common_btn">
                  <a href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login">
                    <img className="me-3" src={Discord} alt="discord" />
                  </a>
                  JOin Discord
                </button>
              </div>
            </div>
            <div className="col-lg-5 d-xxl-none">
              <img className="w-100" src={CommunityImg} alt="community" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
