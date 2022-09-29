import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { ITicketsData } from "../../../types/types";
import { CastomerName } from "./TicketsTableComponent/CastomerName/CastomerName";
import { TicketDate } from "./TicketsTableComponent/TicketDate/TicketDate";
import { TicketDetails } from "./TicketsTableComponent/TicketDetails/TicketDetails";
import { TicketLabel } from "./TicketsTableComponent/TicketLabel/TicketLabel";


interface ITicketsTableProps {
  ticketData: ITicketsData[]
}
export const TicketsTable: React.FC<ITicketsTableProps> = ({ ticketData }) => {
  const columns: ColumnsType<ITicketsData> = [
    {
      title: "Ticket details",
      dataIndex: "",
      key: "name",
      render: ({ image, description, descData }) => (
        <TicketDetails
          image={image}
          description={description}
          descData={descData}
        />
      ),
    },
    {
      title: "Customer name",
      dataIndex: "",
      key: "age",
      render: ({ name, nameData }) => (
        <CastomerName name={name} nameData={nameData} />
      ),
    },
    {
      title: "Date",
      render: ({ date, dateTime }) => (
        <TicketDate date={date} dateTime={dateTime} />
      ),
    },
    {
      title: "Prioriry",
      key: "tag",
      dataIndex: "priority",
      render: (_, { priority }) => {
          let color = "";
          if(priority === 'low') {
            color = "#FEC400"
          } 
          if(priority === 'high') {
            color = "#F12B2C"
          }
          if(priority === 'normal') {
            color = "#29CC97"
          }

        return (
          <TicketLabel priority={priority} color={color}/>
        )
      },
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <span>Delete</span>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={ticketData} />;
};
