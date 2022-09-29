import React, { useState } from "react";
import "./More.scss";
import { Modal } from "antd";
import { IContactsData } from "../../../../../types/types";

interface IMoreProps {
  deleteContact: (id: string) => void;
  record: IContactsData;
}

export const More = ({ deleteContact, record }: IMoreProps) => {
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
      >
        <p className="more__modal-btn"
          onClick={() => {
            deleteContact(record.id);
            handleCancel();
          }}
        >
          Delete
        </p>
      </Modal>
    </>
  );
};
