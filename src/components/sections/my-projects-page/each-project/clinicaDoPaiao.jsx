import React from "react";

export default function clinicaDoPaiao({ setOpenModal }) {
    return (
        <>
            <div className="modal-background" /* onClick={() => {
                setOpenModal(false);
            }} */>
                <div className="modal-container">
                    <div className="modal-header">
                        <button className="modal-close-button" onClick={() => {
                            setOpenModal(false);
                        }}>X</button>
                    </div>
                    <div className="modal-body">
                        <canvas className="modal-img" src="#" alt="#"/>
                        <p className="modal-text">Clinica Do Paião is a medical clinic situated on Paião in Portugal, that offers medical services! Like General Clinic, Psycology, Physioterapy, acupunture and other ones!</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button-project">GitHub</button>
                        <button className="modal-button-project">Website</button>
                        <button className="modal-button-project">behance</button>
                    </div>
                </div>
            </div>
        </>
    );
}
