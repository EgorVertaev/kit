import React, { useState, useEffect } from "react";
import { TicketsTable } from "./TicketsTable/TicketsTable";
import { Modal } from "antd";
import "./Tickets.scss";
import { TicketModal } from "../../components/Modals/TicketModal/TicketModal";
import { FilterIcon, SortIcon } from "../../components/Icons/Icon";
import { Header } from "../../components/Header/Header";
import { Dropdown, Menu } from "antd";
import { TICKET_PRIORITY_TYPE } from "../../constants/constans";
import { useDispatch, useSelector } from "react-redux";
import {
  addTicket,
  deleteTicket,
  clearTicketSorted,
  sortTicketDataFromAtoZ,
  sortTicketDataFromZtoA,
  setSortIconColor,
  filterTicketData,
  setTicketIsFiltered,
  clearTicketFilter,
  ticketFetchRequested,
} from "../../redux/Tickets/ticketsAction";
import { IState } from "../../types/types";

export const Tickets = () => {
  const dispatch = useDispatch();
  const ticketsData = useSelector((state: IState) => state.tickets.ticketsData);
  const isSorted = useSelector((state: IState) => state.tickets.isSorted);
  const isFiltered = useSelector((state: IState) => state.tickets.isFiltered);
  const isSortedIconColor = useSelector(
    (state: IState) => state.tickets.isSortedIconColor
  );

  useEffect(() => {
    dispatch(ticketFetchRequested());
  }, [dispatch]);

  // AddTicket
  const setNewTicket = (
    castomerName: string,
    descriptionValue: string,
    dateValue: string,
    priorityValue: string
  ) => {
    dispatch(
      addTicket({castomerName, descriptionValue, dateValue, priorityValue})
    );
  };

  // deleteTicket
  const delTicket = (id: string) => dispatch(deleteTicket(id));

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setIsModalOpen(false);
    dispatch(clearTicketSorted());
    dispatch(clearTicketFilter());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Sort
  const sortAndDispatch = () => {
    dispatch(sortTicketDataFromZtoA());
    dispatch(setSortIconColor(true));
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
                dispatch(filterTicketData(TICKET_PRIORITY_TYPE.LOW));
                dispatch(setTicketIsFiltered(true));
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
                dispatch(filterTicketData(TICKET_PRIORITY_TYPE.NORMAL));
                dispatch(setTicketIsFiltered(true));
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
                dispatch(filterTicketData(TICKET_PRIORITY_TYPE.HIGH));
                dispatch(setTicketIsFiltered(true));
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
            <button
              className="tickets__btn-sort"
              onClick={() =>
                isSorted ? dispatch(sortTicketDataFromAtoZ()) : sortAndDispatch()
              }
            >
              <div className="tickets__btn-icon">
                {isSortedIconColor ? <SortIcon fill="#3751FF" /> : <SortIcon />}
              </div>
              <span className="tickets__btn-body">Sort</span>
            </button>
            <Dropdown
              overlay={isFiltered ? <span></span> : menu}
              trigger={["click"]}
            >
              <button className="tickets__btn-filter">
                <div className="tickets__btn-icon">
                  {isFiltered ? <FilterIcon fill="#3751FF" /> : <FilterIcon />}
                </div>
                <span className="tickets__btn-body">Filter</span>
              </button>
            </Dropdown>
            {isFiltered ? (
              <button
                onClick={() => {
                  dispatch(setTicketIsFiltered(false));
                  dispatch(clearTicketFilter());
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

            {isSortedIconColor ? (
              <button
                onClick={() => {
                  dispatch(setSortIconColor(false));
                  dispatch(clearTicketSorted());
                }}
                style={{
                  backgroundColor: "#C5C7CD",
                  padding: "2px 6px",
                  borderRadius: "6px",
                }}
              >
                clear sort X
              </button>
            ) : null}
          </div>
          <button className="tickets__btn-add" onClick={showModal}>
            + Add ticket
          </button>
        </div>
        <TicketsTable ticketData={ticketsData} delTicket={delTicket} />

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
