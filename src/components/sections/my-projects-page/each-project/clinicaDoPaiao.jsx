import React, { useEffect } from "react";
import XIconSvg from "../../../../assets/common_elements/icon_X";
import BehanceIcon from "../../../../assets/light_theme/Behance";
import GitHubIcon from "../../../../assets/light_theme/GitHub";
import BrowserIcon from "../../../../assets/light_theme/browser";


export default function clinicaDoPaiao({ setOpenModal }) {

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <button
                        className="modal-close-button"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <XIconSvg width={30} height={30} strokeWidth={3} color="white" />
                    </button>
                    <p className="modal-header-title">Check the Project</p>
                </div>
                <div className="modal-body">
                    <canvas className="modal-img" src="#" alt="#" />
                    <div className="modal-body-text-area">
                        <p className="modal-body-title">Clínica Do Paião</p>
                        <p className="modal-body-sub-title">Web Development and Design UX/UI</p>
                        <p className="modal-text">
                            This is the first professional project I have worked as a freelancer!
                            React/Vite and SCSS are the main technologies of this project!
                            Clinica Do Paião is a medical clinic situated on Paião in
                            Portugal, that offers medical services! Like General Clinic,
                            Psycology, Physioterapy, acupunture and other ones!
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-link-a" href="https://github.com/lucasoriental/clinicadopaiao" target="_blank">
                        <div className="modal-button-project">
                            <div className="modal-button-project-icon">
                                <GitHubIcon height={30} width={30} color={"white"} />
                            </div>
                            <p className="modal-button-project-text">GitHub</p>
                        </div>
                    </a>
                    <a className="modal-link-a" href="https://clinicadopaiao.com" target="_blank">
                        <div className="modal-button-project">
                            <div className="modal-button-project-icon">
                                <BrowserIcon width={30} height={28} color="white" />
                            </div>
                            <p className="modal-button-project-text">WebSite</p>
                        </div>
                    </a>
                    <a className="modal-link-a" href="https://behance.net/lucasoriental" target="_blank">
                        <div className="modal-button-project">
                            <div className="modal-button-project-icon">
                                <BehanceIcon width={30} height={30} color="white" />
                            </div>
                            <p className="modal-button-project-text">Behance</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
