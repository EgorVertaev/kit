import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { ITicketsData } from "../../../types/types";
import { CastomerName } from "./TicketsTableComponent/CastomerName/CastomerName";
import { TicketDate } from "./TicketsTableComponent/TicketDate/TicketDate";
import { TicketDetails } from "./TicketsTableComponent/TicketDetails/TicketDetails";
import { TicketLabel } from "./TicketsTableComponent/TicketLabel/TicketLabel";
import { TicketMore } from "./TicketsTableComponent/TicketMore/TicketMore";


interface ITicketsTableProps {
  ticketData: ITicketsData[];
  delTicket: (id: string) => void;
}

export const TicketsTable: React.FC<ITicketsTableProps> = ({ ticketData, delTicket }) => {
  const columns: ColumnsType<ITicketsData> = [
    {
      title: "Ticket details",
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
      width: "300px",
      key: "age",
      render: ({ name, nameData }) => (
        <CastomerName name={name} nameData={nameData} />
      ),
    },
    { 
      title: "Date",
      width: "250px",
      render: ({ date, dateTime }) => (
        <TicketDate date={date} dateTime={dateTime} />
      ),
    },
    {
      title: "Prioriry",
      key: "tag",
      width: "200px",
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
      width: "50px",
      render: (_, record) => (
        <TicketMore record={record} delTicket={delTicket}/>
      ),
    },
  ];
  return <Table columns={columns} dataSource={ticketData} />;
};
