import React, { useState } from "react";
import "./ContactMore.scss";
import { Modal } from "antd";
import { IContactsData } from "../../../../../types/types";

interface IMoreProps {
  deleteContact: (id: string) => void;
  record: IContactsData;
}

export const ContactMore = ({ deleteContact, record }: IMoreProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContainer = document.querySelector('.inner') as HTMLElement

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
    <div className="inner">
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
        getContainer={modalContainer}
        width={200}
        className={'more-modal'}
        wrapClassName={'more-modal-wrap'}
        mask={false}
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
    </div>
  );
};
