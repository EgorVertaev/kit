import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { IContactsData, IPaginationUseState } from "../../../types/types";
import "./ContactsTable.scss";
import { pageSizeOptions } from "../../../constants/constans";
import { ContactMore } from "./ContactsTableComponents/ContactMore/ContactMore";
import { NameColumn } from "./ContactsTableComponents/NameColomn/NameColumn";

interface IContactsTableData {
  data: IContactsData[];
  pagination: IPaginationUseState;
  setPagination: ({ current, pageSize }: IPaginationUseState) => void;
  delContact: (id: string) => void
}

const ContactsTable: React.FC<IContactsTableData> = ({
  data,
  pagination,
  setPagination,
  delContact,
}) => {

  const columns: ColumnsType<IContactsData> = [
    {
      title: "Name",
      width: "400px",
      render: (record) => (
        <>
          <NameColumn record={record}/>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "250px",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Created at",
      dataIndex: "createData",
      key: "createData",
    },
    {
      title: "",
      width: "50px",
      key: "action",
      render: (_, record) => (
        <>
          <ContactMore delContact={delContact} record={record} />
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        showSizeChanger: true,
        ...pageSizeOptions,
        onChange: (current, pageSize) =>
          setPagination({
            current,
            pageSize,
          }),
        ...pagination,
      }}
    />
  );
};

export default ContactsTable;
