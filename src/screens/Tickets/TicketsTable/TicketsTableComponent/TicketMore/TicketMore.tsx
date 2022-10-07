import React from "react";
import "./TicketMore.scss";
import { ITicketsData } from "../../../../../types/types";
import { Dropdown, Menu} from 'antd';

interface ITicketMoreProps {
  delTicket: (id: string) => void;
  record: ITicketsData;
}

export const TicketMore = ({ delTicket, record }: ITicketMoreProps) => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <p className="more__modal-btn"
            onClick={() => {
              delTicket(record.id);
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