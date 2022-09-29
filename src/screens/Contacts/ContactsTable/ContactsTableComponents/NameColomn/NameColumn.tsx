import React from "react";
import { IContactsData } from "../../../../../types/types";
import './NameColumn.scss'
interface INameColumnProps {
  record: IContactsData;
}

export const NameColumn = ({ record }: INameColumnProps) => {
  return (
    <div className="name-column">
      <img
        className="name-column__img"
        src={record.image}
        alt="user-profile-img"
        width={44}
        height={44}
        style={{ borderRadius: "50%" }}
      />
      <div className="name-column__name">
        {record.name}
      </div>
    </div>
  );
};
