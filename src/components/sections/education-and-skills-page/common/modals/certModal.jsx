import { useEffect } from "react";
import XIconSvg from "../../../../../assets/common_elements/icon_X";

export default function CertModal({ setOpenModal }) {

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
        <p>body here</p>
      </div>
    </div>
  </div >
  );
}