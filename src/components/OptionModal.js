import React from "react";
// import Modal from "react-modal";
import SweetAlert from "sweetalert2-react";
import "../styles/components/_modal.scss";

const OptionModal = props => (
  <SweetAlert
    show={!!props.selectedOption}
    title=""
    text={props.selectedOption}
    onConfirm={props.handleClearSelectedOption}
  />
);

export default OptionModal;
