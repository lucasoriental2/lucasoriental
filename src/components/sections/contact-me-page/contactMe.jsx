import React, {useState} from 'react';
import InstagramSVG from "../../../assets/light_theme/Instagram"
import GitHubSVG from "../../../assets/light_theme/GitHub"
import BehanceSVG from "../../../assets/light_theme/Behance"
import LocationSVG from "../../../assets/light_theme/locate"
import MailSVG from "../../../assets/light_theme/mail"
import NumberSVG from "../../../assets/light_theme/wpp_or_call"
import LinkedInSVG from "../../../assets/light_theme/LinkedIn"

const contactMePage = () => {

    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [textBoxErr, setTextBoxErr] = useState("")

    const onChange = (e) => {
      if (e.target.name === "nameUser") {
        setNameErr(e.target.value === "" ? "This field is required" : "");
      }
      if (e.target.name === "email"){
        setEmailErr(e.target.value === "" ? "This field is also required" : "");
      }
      if (e.target.name === "message"){
        setTextBoxErr(e.target.value === "" ? "This field too :D" : "");
      }
    }

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
        } catch (err) {
          console.error(err);
        }
    }

    return (
      <div id="contact-me-container">
        <div className="container-general">
          <p className="title-general">CONTACT ME</p>
          <div className="contact-me-form-social">
            <div className="contact-me-left-side">
              <div>
                <div className="left-side-title-and-canvas">
                  <p className="left-side-form-title" >Get in Touch!</p>
                  <canvas className="left-side-form-above-title" />
                </div>
                <div className="left-side-all-items">
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">
                        Rio de Janeiro (RJ) - Brazil
                      </p>
                      <LocationSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">
                        lucasoriental@gmail.com
                      </p>
                      <MailSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">+55 (21) 99525-3580</p>
                      <NumberSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">@lucas_oriental</p>
                      <InstagramSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">/lucasoriental</p>
                      <GitHubSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">
                        Lucas Oriental dos Santos
                      </p>
                      <LinkedInSVG />
                    </a>
                  </div>
                  <div className="left-side-item">
                    <a href="#" className="left-side-item-a">
                      <p className="social-media-name">/lucasoriental</p>
                      <BehanceSVG />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="contact-me-right-side">
              <p className="title-form-right-side">SEND ME A MESSAGE</p>
              <form id="form-contact-me">
                <label>
                  <input
                    required
                    type="text"
                    id="name-field"
                    name="nameUser"
                    placeholder="Name"
                    onChange={(e) => onChange(e)}
                  />
                  {nameErr.length > 0 && (
                    <p className="form-field-error-msg">{nameErr}</p>
                  )}
                </label>
                <label>
                  <input
                    required
                    type="email"
                    id="email-field"
                    name="email"
                    placeholder="E-mail Address"
                    onChange={(e) => onChange(e)}
                  />
                  {emailErr.length > 0 && (
                    <p className="form-field-error-msg">{emailErr}</p>
                  )}
                </label>
                <label>
                  <input
                    required
                    type="text"
                    id="textBox-field"
                    name="message"
                    placeholder="Type anything you want..."
                    maxLength="500"
                    onChange={(e) => onChange(e)}
                  />
                  {textBoxErr.length > 0 && (
                    <p className="form-field-error-msg">{textBoxErr}</p>
                  )}
                </label>

                <input
                  type="submit"
                  className="button-right-side-form"
                  value="Submit"
                />
              </form>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default contactMePage;