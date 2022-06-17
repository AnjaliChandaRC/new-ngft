import React from "react";
import MerchImg from "../assets/image/Merch.png";
function Merch() {
  return (
    <>
      <section className="bg_black py-5 mt-minus" id="Merch">
        <div className="container py-md-5">
          <div className="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <div className="col-lg-6 mt-3 mt-sm-5 mt-lg-0">
              <h4 className="main_heading">MERCH</h4>
              <p className="main_para mt-4">
                This jacket is the first product of the NGFT Merchandise. Owning
                a @nervousgorillafaceteam NFT you have opportunity to get one of
                hand painted jacket with your own gorilla face on it. Created by
                our teammate and good friend @aleksandar94art
              </p>
            </div>
            <div className="col-8 col-lg-5">
              <img className="w-100" src={MerchImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merch;
