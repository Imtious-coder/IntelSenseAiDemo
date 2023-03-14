import React from "react";

const Mobile = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">WE CAN TALK AI ALL DAY!</div>
        <div className="subtitle">HAVE QUESTIONS?WE GOT YOU!</div>
      </div>

      <div className="line"></div>

      <div className="form">
        <div className="formHeader">Submit your query</div>
        <form action="">
          <input type="text" placeholder="Name" />
          <br />
          <input type="email" placeholder="Email address" />
          <br />
          <input type="text" placeholder="Country" />
          <br />
          <input type="text" placeholder="Phone" />
          <br />
          <input type="text" placeholder="How can I help you?" />
          <br />
          <div className="check">
            <input
              type="checkbox"
              defaultChecked="checked"
              className="checkbox"
            />
            <div className="disclaimer">
              By submittin this form , I agree to receive communication from
              Element AI in connection with enquery. <br />
              My information will be processed in accordance with intelsence
              AI's Privacy Policy.
            </div>
          </div>
          <button id="submit" className="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>

      <div className="line"></div>

      <div className="address">
        <div className="bluebar"></div>
        <img src="images/AboutustopAsset.png" alt="" className="mapImage" />
        <img
          src="images/AboutuslocationiconAsset3.svg"
          alt=""
          className="locationIcon"
        />
        <div className="addressText">
          <h6>Dhaka office</h6>
          <p>
            INTELSENSE AI LIMITED <br />
            HOUSE NO 1/A, ROAD NO 35, <br />
            GULSHAN, DHAKA <br />
            e-mail: info@intelsense.ai <br />
            Contact: +880 1625-555007
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
