import React, { useState } from "react";
import { Button } from "../../../components/Buttons/buttons";
import { DatePicker, Select } from "antd";
import "./TicketModal.scss";

interface ITicketModalProps {
  handleSave: () => void;
  handleCancel: () => void;
  setNewTicket: (
    castomerNameValue: string,
    descriptionValue: string,
    dateValue: string,
    priorityValue: string
  ) => void;
}

export const TicketModal: React.FC<ITicketModalProps> = ({
  handleSave,
  setNewTicket,
  handleCancel,
}) => {
  const [castomerNameValue, setCastomerNameValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");
  const [priorityValue, setPriorityValue] = useState<string>("");


  const { Option } = Select;

  return (
    <form className="ticket-form" onSubmit={(e) => e.preventDefault()}>
      <label className="ticket-form__label">description</label>
      <input
        className="ticket-form__input"
        type="text"
        value={descriptionValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDescriptionValue(e.currentTarget.value)
        }
      />

      <label className="ticket-form__label">Castomer Name</label>
      <input
        className="ticket-form__input"
        type="text"
        value={castomerNameValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setCastomerNameValue(e.currentTarget.value)
        }
      />
      <label className="ticket-form__label">Date</label>
      <DatePicker onChange={(date, dateSring) => setDateValue(dateSring)} />

      <label className="ticket-form__label">Priority</label>
      <Select style={{ width: "100%" }} onChange={(value) => setPriorityValue(value)}>
        <Option value="low">Low</Option>
        <Option value="high">High</Option>
        <Option value="normal">Normal</Option>
      </Select>
      <div
        className="contact-form__btn-save"
        onClick={() => {
          handleSave();
          setNewTicket(
            castomerNameValue,
            descriptionValue,
            dateValue,
            priorityValue
          );
        }}
      >
        <Button body={"Save"} />
      </div>
      <div className="contact-form__btn-cancel" onClick={() => handleCancel()}>
        <Button body={"Cancel"} />
      </div>
    </form>
  );
};
