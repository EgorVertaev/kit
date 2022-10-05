import React from "react";
import "./ContactMore.scss";
import { Dropdown, Menu} from 'antd';
import { IContactsData } from "../../../../../types/types";



interface IMoreProps {
  record: IContactsData;
  delContact: (id: string) => void;
}


export const ContactMore = ({ delContact, record }: IMoreProps) => {

  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['3']}
      items={[
        {
          key: '1',
          label: (
            <p className="more__modal-btn"
            onClick={() => {
              delContact(record.id);
            }}
          >
            Delete
          </p>
          ),
        }
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div className="more">
        <span className="more__span"></span>
        <span className="more__span"></span>
        <span className="more__span"></span>
      </div>
    </Dropdown>
  );
};
