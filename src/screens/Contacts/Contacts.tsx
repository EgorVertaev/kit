import React, { useEffect, useState } from "react";
import "./Contacts.scss";
import ContactsTable from "./ContactsTable/ContactsTable";
import { Modal } from "antd";
import { ContactModal } from "../../components/Modals/ContactModal/ContactModal";
import { IPaginationUseState } from "../../types/types";
import { FilterIcon, SortIcon } from "../../components/Icons/Icon";
import { Header } from "../../components/Header/Header";
import { Dropdown, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  clearSorted,
  deleteContact,
  sortDataFromAtoZ,
  sortDataFromZtoA,
  setIsSortedIconColor,
  filterData,
  setIsFiltered,
  clearFilter,
  contactsFetchRequested,
} from "../../redux/Contacts/contactActions";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector((state: any) => state.contacts.contactsData);
  const isSorted = useSelector((state: any) => state.contacts.isSorted);
  const isFiltered = useSelector((state: any) => state.contacts.isFiltered);
  const isSortedIconColor = useSelector(
    (state: any) => state.contacts.isSortedIconColor
  );

  useEffect(() => {
    dispatch(contactsFetchRequested());
  }, [dispatch]);

  const [pagination, setPagination] = useState<IPaginationUseState>({
    current: 1,
    pageSize: 8,
    // total: 8,
  });

  // add contact
  const setNewContact = (
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    adressValue: string
  ) =>
    dispatch(
      addContact({firstNameValue, lastNameValue, emailValue, adressValue})
    );

  // delete contact
  const delContact = (id: string) => dispatch(deleteContact(id));

  // Sort

  const sortAndDispatch = () => {
    dispatch(sortDataFromZtoA());
    dispatch(setIsSortedIconColor(true));
  };
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setIsModalOpen(false);
    dispatch(clearSorted());
    dispatch(setIsSortedIconColor(false));
    dispatch(setIsFiltered(false));
    dispatch(clearFilter());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // dropdown

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
                onChange={(e) => dispatch(filterData(e.currentTarget.value))}
                type="text"
                placeholder="search name"
                style={{ marginRight: "10px" }}
              />
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
            <button
              className="contacts__btn-sort"
              onClick={() =>
                isSorted ? dispatch(sortDataFromAtoZ()) : sortAndDispatch()
              }
            >
              <div className="contacts__btn-icon">
                {isSortedIconColor ? <SortIcon fill="#3751FF" /> : <SortIcon />}
              </div>
              <span className="contacts__btn-body">Sort</span>
            </button>

            <Dropdown overlay={menu} trigger={["click"]}>
              <button
                className="contacts__btn-filter"
                onClick={() => dispatch(setIsFiltered(true))}
              >
                <div className="contacts__btn-icon">
                  {isFiltered ? <FilterIcon fill="#3751FF" /> : <FilterIcon />}
                </div>
                <span>Filter</span>
              </button>
            </Dropdown>

            {isFiltered ? (
              <button
                onClick={() => {
                  dispatch(setIsFiltered(false));
                  dispatch(clearFilter());
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
                  dispatch(clearSorted());
                  dispatch(setIsSortedIconColor(false));
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
          <button className="contacts__btn-add" onClick={showModal}>
            + Add contacts
          </button>
        </div>
        <ContactsTable
          data={contactsData}
          pagination={pagination}
          setPagination={setPagination}
          delContact={delContact}
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
