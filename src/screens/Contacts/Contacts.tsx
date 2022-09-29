import React, { useState } from "react"
import './Contacts.scss'
import ContactsTable from './ContactsTable/ContactsTable'
import { Modal } from "antd"
import { contactsData } from "./moaks"
import { ContactModal } from "../../components/Modals/ContactModal/ContactModal"
import { IPaginationUseState } from '../../types/types'
import { FilterIcon, SortIcon } from "../../components/Icons/Icon"



export const Contacts = () => {

  const [pagination, setPagination] = useState<IPaginationUseState>({
    current: 1,
    pageSize: 8,
    // total: 8,  
  })

  const [data, setData] = useState(contactsData)

  const setNewContact = (
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    adressValue: string
    ) => {
    
    const date = new Date()
    const randomId = Date.now().toString()
    const newData = {
      id: randomId,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1szjLLPfS0u2-xy0t04XfwMfDXAxkmv3e8IWNcfcAZ2xOWoV1joEQu0FshB_XOjtRRg&usqp=CAU',
      name: `${firstNameValue} ${lastNameValue}`,
      email: emailValue,
      address: adressValue,
      createData: `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`
    }
    setData(data => [...data, newData])
  }

  const deleteContact = (id: string) => {
    const newData = data.filter(el => el.id !== id)  
    setData(() => newData )
  }

  const sortedData = () => {
    let newSortData = [...data]
    let sort = newSortData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    setData(sort)
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
    <>
      <div className="contacts">
        <div className="contacts__header">
          <div className="contacts__inner">
            <button className="contacts__btn-sort" onClick={() => sortedData()}>
              <div className="contacts__btn-icon">
                <SortIcon/>
              </div>
              <span className="contacts__btn-body">
              Sort
              </span>
            </button>
            <button className="contacts__btn-filter">
              <div className="contacts__btn-icon">
                <FilterIcon/> 
              </div>
              <span className="contacts__btn-body">
                Filter
              </span>
            </button>
          </div>
          <button className="contacts__btn-add" onClick={showModal}>+ Add contacts</button>
        </div>
        <ContactsTable data={data} pagination={pagination} setPagination={setPagination} deleteContact={deleteContact}/>
      </div>

      <Modal 
        title="Add new contact"
        open={isModalOpen}
        onCancel={handleCancel}  
        closable={false}
        footer={null}
        width={380}
      >
        <ContactModal handleSave={handleSave} handleCancel={handleCancel} setNewContact={setNewContact} />
      </Modal>
    </>
   
  )
}