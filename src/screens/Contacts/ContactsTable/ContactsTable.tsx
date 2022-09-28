import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { IContactsData, IPaginationUseState } from "../../../types/types";
import "./ContactsTable.scss";
import { pageSizeOptions } from "../../../constants/constans";
import { More } from "./More/More";

interface IContactsTableData {
  data: IContactsData[];
  pagination: IPaginationUseState;
  setPagination: ({ current, pageSize }: IPaginationUseState) => void;
  deleteContact: (id: string) => void;
}

const ContactsTable: React.FC<IContactsTableData> = ({
  data,
  pagination,
  setPagination,
  deleteContact,
}) => {
  const columns: ColumnsType<IContactsData> = [
    {
      title: "Name",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="user-profile-img"
          width={44}
          height={44}
          style={{ borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
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
      key: "action",
      render: (_, record) => (
        <>
          <More deleteContact={deleteContact} record={record} />
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
