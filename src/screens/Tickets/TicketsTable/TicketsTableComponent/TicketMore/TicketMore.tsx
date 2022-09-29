import React, { useState } from "react";
import "./TicketMore.scss";
import { Modal } from "antd";
import { ITicketsData } from "../../../../../types/types";

interface ITicketMoreProps {
  deleteTicket: (id: string) => void;
  record: ITicketsData;
}

export const TicketMore = ({ deleteTicket, record }: ITicketMoreProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="more" onClick={showModal}>
        <span className="more__span"></span>
        <span className="more__span"></span>
        <span className="more__span"></span>
      </div>
      
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width={200}
      >
        <p className="more__modal-btn"
          onClick={() => {
            deleteTicket(record.id);
            handleCancel();
          }}
        >
          Delete
        </p>
      </Modal>
    </>
  );
};