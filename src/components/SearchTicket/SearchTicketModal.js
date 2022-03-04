import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "reactstrap";
import "./SearchTicketModal.scss";

const SearchTicketModal = ({
  openTicketModal,
  openModalTicket,
  fetchFolio,
}) => {
  const [folio, setFolio] = useState("");

  return (
    <Modal
      className="modal-container"
      isOpen={openTicketModal}
      toggle={openModalTicket}
    >
      <ModalHeader className="modal-title-searchticket">
        Buscar Boleta
      </ModalHeader>
      <ModalBody className="modal-body-input">
        <Input
          type="text"
          defaultValue=""
          name="buscador"
          placeholder="Ingresar Numero de Boleta"
          onChange={(e) => setFolio(e.target.value)}
        />
      </ModalBody>
      <ModalFooter className="modal-footer">
        <Button color="primary" onClick={() => fetchFolio(folio)}>
          Buscar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SearchTicketModal;
