import React from "react";

export default function clinicaDoPaiao({ setOpenModal }) {
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <button onClick={() => {
                            setOpenModal(false);
                        }}>X</button>
                    </div>
                    <div className="modal-body">
                        <p>Clinica Do Paião is a medical clinic situated on Paião in Portugal, that offers medical services! Like General Clinic, Psycology, Physioterapy, acupunture and other ones!</p>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </>
    );
}
