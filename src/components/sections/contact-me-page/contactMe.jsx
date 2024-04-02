import React, {useState} from 'react';

const contactMePage = () => {

    const [nameErr, setName] = useState("")
    const [emailErr, setEmail] = useState("")

    const onChange = (e) => {
      if (e.target.name === "nameUser") {
        setName(e.target.value === "" ? "empty is not allowed" : "");
      }
      if (e.target.name === "email"){
        setEmail(e.target.value === "" ? "empty is not allowed" : "");
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
        <p className="title-general">CONTACT ME</p>
        <div className="contact-me-form-social">
          <div className="contact-me-left-side">
            <div>
              <div>
                <p>get in touch</p>
                <canvas></canvas>
              </div>
              <div>
                <div>
                  <a href="#">
                    <p>Rio de Janeiro (RJ) - Brazil</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>lucasoriental@gmail.com</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>+55 (21) 99525-3580</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>@lucas_oriental</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>/lucasoriental</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>Lucas Oriental dos Santos</p>
                    <>SVG</>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <p>/lucasoriental</p>
                    <>SVG</>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me-right-side">
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
                {nameErr.length > 0 && <p>{nameErr}</p>}
              </label>
              <label>
                <input
                  invalid={emailErr.length > 0}
                  required
                  type="email"
                  id="email-field"
                  name="email"
                  placeholder="E-mail Address"
                  onChange={(e) => onChange(e)}
                />
                {emailErr.length > 0 && <p>{emailErr}</p>}
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
                {emailErr.length > 0 && <p>{emailErr}</p>}
              </label>

              <input type="submit" className="button-right-side-form" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
}

export default contactMePage;