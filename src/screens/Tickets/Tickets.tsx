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
  clearSorted,
  sortDataFromAtoZ,
  sortDataFromZtoA,
  setSortIconColor,
  filterData,
  setIsFiltered,
  clearTicketFilter,
  getTickets,
} from "../../redux/Reducers/TicketsReducer";

export const Tickets = () => {
  const dispatch = useDispatch();
  const ticketsData = useSelector((state: any) => state.tickets.ticketsData);
  const isSorted = useSelector((state: any) => state.tickets.isSorted);
  const isFiltered = useSelector((state: any) => state.tickets.isFiltered);
  const isSortedIconColor = useSelector(
    (state: any) => state.tickets.isSortedIconColor
  );
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    // @ts-ignore
    dispatch(getTickets());
  }, [dispatch]);

  // AddTicket
  const setNewTicket = (
    castomerName: string,
    descriptionValue: string,
    dateValue: string,
    priorityValue: string
  ) => {
    dispatch(
      addTicket(castomerName, descriptionValue, dateValue, priorityValue)
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
    dispatch(clearSorted());
    dispatch(clearTicketFilter());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Sort
  const sortAndDispatch = () => {
    dispatch(sortDataFromZtoA());
    dispatch(setSortIconColor(true));
  };

  // Filter
  // const [isFilter, setIsFilter] = useState(false);

  // const filterPriority = (priority: string) => {
  //   const newFilterData = [...data];
  //   const filteredData = newFilterData.filter(
  //     (item) => item.priority === priority
  //   );
  //   setTicketData(filteredData);
  // };

  // Dropdown

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={() => {
                dispatch(filterData(TICKET_PRIORITY_TYPE.LOW));
                dispatch(setIsFiltered(true));
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
                dispatch(filterData(TICKET_PRIORITY_TYPE.NORMAL));
                dispatch(setIsFiltered(true));
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
                dispatch(filterData(TICKET_PRIORITY_TYPE.HIGH));
                dispatch(setIsFiltered(true));
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
                isSorted ? dispatch(sortDataFromAtoZ()) : sortAndDispatch()
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
                  dispatch(setIsFiltered(false));
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
                  dispatch(clearSorted());
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
