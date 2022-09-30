import React, { useState } from "react";
import "./Contacts.scss";
import ContactsTable from "./ContactsTable/ContactsTable";
import { Modal } from "antd";
import { contactsData } from "./moaks";
import { ContactModal } from "../../components/Modals/ContactModal/ContactModal";
import { IPaginationUseState } from "../../types/types";
import { FilterIcon, SortIcon } from "../../components/Icons/Icon";
import { Header } from "../../components/Header/Header";
import { Dropdown, Menu } from "antd";

export const Contacts = () => {

  const [pagination, setPagination] = useState<IPaginationUseState>({
    current: 1,
    pageSize: 8,
    // total: 8,
  });

  const [data, setData] = useState(contactsData);

  const setNewContact = (
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    adressValue: string
  ) => {
    const date = new Date();
    const randomId = Date.now().toString();
    const newData = {
      id: randomId,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU",
      name: `${firstNameValue} ${lastNameValue}`,
      email: emailValue,
      address: adressValue,
      createData: `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
    };
    setIsSorted(false);
    setData((data) => [...data, newData]);
  };

  const deleteContact = (id: string) => {
    const newData = data.filter((el) => el.id !== id);
    setData(newData);
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
      setData(sort);
    }

    if (isSorted === true) {
      const newSortData = [...data];
      const sort = newSortData.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
      setIsSorted(false);
      setData(sort);
    }
  };
  // Modal

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

  // dropdown
  const [isFilter, setIsFilter] = useState(false);

  //Filter
  const [filterValue, setFilterValue] = useState("");

  const FilterData = () => {
    const newFilterData = [...data];
    const filteredData = newFilterData.filter((item) => item.name === filterValue);
    setData(filteredData);
  };
  
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <form
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <input
                onChange={(e) => setFilterValue(e.currentTarget.value)}
                type="text"
                placeholder="search name"
                style={{ marginRight: "10px" }}
              />
              <button
                onClick={() => {
                  FilterData();
                  setIsFilter(true);
                }}
              >
                Ok
              </button>
            </form>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <Header title={"Contacts"} />

      <div className="contacts">
        <div className="contacts__header">
          <div className="contacts__inner">
            <button className="contacts__btn-sort" onClick={() => sortedData()}>
              <div className="contacts__btn-icon">
                {isSorted ? <SortIcon fill="#3751FF" /> : <SortIcon />}
              </div>
              <span className="contacts__btn-body">Sort</span>
            </button>

            <Dropdown
              overlay={isFilter ? <span></span> : menu}
              trigger={["click"]}
            >
              <button className="contacts__btn-filter" >
                <div className="contacts__btn-icon">
                  {isFilter ? <FilterIcon fill="#3751FF" /> : <FilterIcon />}
                </div>
                <span>Filter</span>
              </button>
            </Dropdown>

            {isFilter ? 
              <button
                onClick={() => {
                  setIsFilter(false);
                  setData(contactsData);
                }}
                style={{backgroundColor: "#C5C7CD", padding: "2px 6px", borderRadius: "6px"}}
              >
                clear filter X
              </button>
             : null}
          </div>
          <button className="contacts__btn-add" onClick={showModal}>
            + Add contacts
          </button>
        </div>
        <ContactsTable
          data={data}
          pagination={pagination}
          setPagination={setPagination}
          deleteContact={deleteContact}
        />
      </div>

      <Modal
        title="Add new contact"
        open={isModalOpen}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={380}
      >
        <ContactModal
          handleSave={handleSave}
          handleCancel={handleCancel}
          setNewContact={setNewContact}
        />
      </Modal>
    </>
  );
};
