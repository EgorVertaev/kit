import React, { useState } from "react";
import { TicketsTable } from "./TicketsTable/TicketsTable";
import { Modal } from "antd";
import "./Tickets.scss";
import { TicketModal } from "../../components/Modals/TicketModal/TicketModal";
import { ticketData } from './ticketmoaks'




export const Tickets = () => {

  const [data, setTicketData] = useState(ticketData)
  console.log(data)
  const setNewTicket = (
    castomerName: string,
    descriptionValue: string,
    dateValue: string,
    priorityValue: string
    ) => {
    
    const date = new Date()
    const randomId = Date.now().toString()
    const newData = {
      id: randomId,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU',
      description: descriptionValue,
      descData: `Updated ${date.getDay()} day ago`,
      name: castomerName,
      nameData: `on ${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
      date: dateValue,
      dateTime: `${date.getDay()}`,
      priority: priorityValue
    }
    setTicketData(data => [...data, newData])
  }

  const deleteTicket = (id: string) => {
    const newData = data.filter(el => el.id !== id)  
    setTicketData((data) => newData )
  }



  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tickets">
      <div className="tickets__header">
        <div className="tickets__inner">
          <button className="tickets__btn-filter">Filter</button>
          <button className="tickets__btn-sort">Sort</button>
        </div>
        <button className="tickets__btn-add" onClick={showModal}>
          + Add contacts
        </button>
      </div>
      <TicketsTable ticketData={data}/>

      <Modal
        title="Add new ticket"
        open={isModalOpen}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={380}
      >
      <TicketModal handleSave={handleSave} handleCancel={handleCancel} setNewTicket={setNewTicket} />
      </Modal>
    </div>
  );
};
