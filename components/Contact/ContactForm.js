import React from "react";
import { sendEmail } from "../../utils/api";
import countries from "./countries.json";

import PhoneInput from "react-phone-number-input";
import ScrollToTop from "../scrollToTop";

const Contact = () => {
  const [contactUs, setContactUs] = React.useState({
    name: "",
    country: "",
    phone: "",
    message: "",
    email: "",
  });

  const [isSubmitting, setSubmitting] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState();

  React.useEffect(() => {
    setContactUs({
      ...contactUs,
      phone: phoneNumber,
    });
  }, [phoneNumber]);

  const resetForm = () => {
    setContactUs({
      name: "",
      country: "",
      phone: "",
      message: "",
      email: "",
    });

    setPhoneNumber("");
  };

  const handleForm = (e) => {
    setSubmitting(true);
    e.preventDefault();
    // console.log(contactUs);
    sendEmail(contactUs)
      .then((status) => {
        if (status === 200) {
          alert("Thank you for contacting us");
          resetForm();
        } else alert("Couldn't sent email", status);
      })
      .then(() => setSubmitting(false));
  };

  const handleChange = (e) => {
    e.preventDefault();

    let data = {};

    data[e.target.getAttribute("name")] = e.target.value;

    setContactUs({
      ...contactUs,
      ...data,
    });
  };

  return (
    <div className="content">
      <ScrollToTop />
      <div className="mainContent">
        <div className="heading">
          <div className="heading__content">
            <div className="heading__content--left">
              <h2>
                “AI is a tool. The choice about <br />
                how it gets deployed is ours.”
              </h2>
              <p className="heading__content--author">-Vivienne Ming</p>
              <p className="heading__content--choice">
                Looking for expertiese to make your choiche in the magical world
                of AI?
              </p>
              <h4>Write to us!</h4>
            </div>
          </div>

          <div className="heading__form">
            <h3>Submit your query</h3>
            <form onSubmit={handleForm}>
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={contactUs.name}
                required
              />
              <br />
              <input
                type="email"
                placeholder="Business Email"
                onChange={handleChange}
                name="email"
                value={contactUs.email}
                required
              />
              <br />
              <select
                type="text"
                placeholder="Country"
                onChange={handleChange}
                name="country"
                value={contactUs.country}
                required
              >
                <option key="select" value="">
                  Your country
                </option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <br />
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />

              {/* <input
                value={contactUs.phone}
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
                required
              /> */}
              <br />
              <input
                value={contactUs.subject}
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                name="subject"
                required
              />
              <br />
              <textarea
                value={contactUs.message}
                type="text"
                onChange={handleChange}
                placeholder="How can we help you?"
                name="message"
                required
              />
              <br />
              <div className="checkBox">
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="agreement"
                  required
                />
                <div className="label">
                  <label>
                    By submitting this form , I agree to receive communication
                    from IntelsenseAI in connection with enquery.
                  </label>
                  <label>
                    My information will be processed in accordance with
                    IntelsenceAI's Privacy Policy.
                  </label>
                </div>
              </div>
              <button id="submit" disabled={isSubmitting ? true : false}>
                {(!isSubmitting && "Submit") || "Submitting..."}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer" id="office">
        <div className="location">
          <img src="images/AboutustopAsset.png" alt="" />
          <div className="card-heading">
            <h4>Dhaka office</h4>
            <p>
              INTELSENSE AI LIMITED <br />
              House-60, Road-03, Block-B <br />
              Niketon, Gulshan-1, Dhaka
            </p>
            <p>e-mail: info@intelsense.ai</p>
            <p>Contact: +880 1625-555007</p>
          </div>
          <img src="images/AboutuslocationiconAsset3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
