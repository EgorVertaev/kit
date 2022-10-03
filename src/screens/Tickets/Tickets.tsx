import React, { useState } from "react";
import { TicketsTable } from "./TicketsTable/TicketsTable";
import { Modal } from "antd";
import "./Tickets.scss";
import { TicketModal } from "../../components/Modals/TicketModal/TicketModal";
import { ticketData } from "./ticketmoaks";
import { FilterIcon, SortIcon } from "../../components/Icons/Icon";
import { Header } from "../../components/Header/Header";
import { Dropdown, Menu } from "antd";
import { TICKET_PRIORITY_TYPE } from '../../constants/constans'


export const Tickets = () => {
  const [data, setTicketData] = useState(ticketData);

  console.log(data);
  const setNewTicket = (
    castomerName: string,
    descriptionValue: string,
    dateValue: string,
    priorityValue: string
  ) => {
    const date = new Date();
    const randomId = Date.now().toString();
    const newData = {
      id: randomId,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
      description: descriptionValue,
      descData: `Updated ${date.getDay()} day ago`,
      name: castomerName,
      nameData: `on ${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
      date: dateValue,
      dateTime: `${date.getDay()}`,
      priority: priorityValue,
    };
    setIsFilter(false)
    setIsSorted(false);
    setTicketData(ticketData)
    setTicketData((data) => [...data, newData]);
  };

  const deleteTicket = (id: string) => {
    const newData = data.filter((el) => el.id !== id);
    setTicketData(newData);
  };

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

  // Sort
  const [isSorted, setIsSorted] = useState(false);

  const sortedData = () => {
    if (isSorted === false) {
      const newSortData = [...data];
      const sort = newSortData.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
      setIsSorted(true);
      setTicketData(sort);
    }

    if (isSorted === true) {
      const newSortData = [...data];
      const sort = newSortData.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
      setIsSorted(false);
      setTicketData(sort);
    }
  };

  // Filter
  const [isFilter, setIsFilter] = useState(false);

  const filterPriority = (priority: string) => {
    const newFilterData = [...data];
    const filteredData = newFilterData.filter(
      (item) => item.priority === priority
    );
    setTicketData(filteredData);
  };

  // Dropdown

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={() => {
                filterPriority(TICKET_PRIORITY_TYPE.LOW);
                setIsFilter(true);
              }}
            >
              Low
            </button>
          ),
        },
        {
          key: "2",
          label: (
            <button
              onClick={() => {
                filterPriority(TICKET_PRIORITY_TYPE.NORMAL);
                setIsFilter(true);
              }}
            >
              Normal
            </button>
          ),
        },
        {
          key: "3",
          label: (
            <button
              onClick={() => {
                filterPriority(TICKET_PRIORITY_TYPE.HIGH);
                setIsFilter(true);
              }}
            >
              High
            </button>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <Header title={"Tickets"} />

      <div className="tickets">
        <div className="tickets__header">
          <div className="tickets__inner">
            <button className="tickets__btn-sort" onClick={() => sortedData()}>
              <div className="tickets__btn-icon">
                {isSorted ? <SortIcon fill="#3751FF" /> : <SortIcon />}
              </div>
              <span className="tickets__btn-body">Sort</span>
            </button>
            <Dropdown
              overlay={isFilter ? <span></span> : menu}
              trigger={["click"]}
            >
              <button className="tickets__btn-filter">
                <div className="tickets__btn-icon">
                  {isFilter ? <FilterIcon fill="#3751FF" /> : <FilterIcon />}
                </div>
                <span className="tickets__btn-body">Filter</span>
              </button>
            </Dropdown>
            {isFilter ? (
              <button
                onClick={() => {
                  setIsFilter(false);
                  setTicketData(ticketData);
                }}
                style={{
                  backgroundColor: "#C5C7CD",
                  padding: "2px 6px",
                  borderRadius: "6px",
                }}
              >
                clear filter X
              </button>
            ) : null}
          </div>
          <button className="tickets__btn-add" onClick={showModal}>
            + Add ticket
          </button>
        </div>
        <TicketsTable ticketData={data} deleteTicket={deleteTicket} />

        <Modal
          title="Add new ticket"
          open={isModalOpen}
          onCancel={handleCancel}
          closable={false}
          footer={null}
          width={380}
        >
          <TicketModal
            handleSave={handleSave}
            handleCancel={handleCancel}
            setNewTicket={setNewTicket}
          />
        </Modal>
      </div>
    </>
  );
};
