import React from "react";
import FooterLogo from "../assets/image/footer.png";
function Footer() {
  return (
    <>
      <section className="pt-5 pb-2 mt-minus bg_black">
        <div className="container mt-sm-5">
          <div className="text-center">
            <img src={FooterLogo} alt="footer-logo" />
            <div className="footer_border mt-4"></div>
            <p className="main_para mt-4">META BILLIONAIRE'S NFT PROPERTY.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
