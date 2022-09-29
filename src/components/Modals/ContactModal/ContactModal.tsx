import React, { useState } from "react";
import "./ContactModal.scss";
import { Button } from "../../Buttons/buttons";

interface IContactModalProps {
  handleCancel: () => void;
  handleSave: () => void;
  setNewContact: (
    irstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    adressValue: string
  ) => void;
}

export const ContactModal = ({
  handleCancel,
  handleSave,
  setNewContact,
}: IContactModalProps) => {
  const [firstNameValue, setFirstNameValue] = useState<string>("");
  const [lastNameValue, setLastNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [adressValue, setAdressValue] = useState<string>("");

  return (
    <>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label className="contact-form__label"> first name</label>
        <input
          className="contact-form__input"
          type="text"
          value={firstNameValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFirstNameValue(e.currentTarget.value)
          }
        />

        <label className="contact-form__label"> Last name</label>
        <input
          className="contact-form__input"
          type="text"
          value={lastNameValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setLastNameValue(e.currentTarget.value)
          }
        />

        <label className="contact-form__label"> email </label>
        <input
          className="contact-form__input"
          type="text"
          value={emailValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmailValue(e.currentTarget.value)
          }
        />

        <label className="contact-form__label"> adress </label>
        <input
          className="contact-form__input"
          type="text"
          value={adressValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setAdressValue(e.currentTarget.value)
          }
        />

        <div
          className="contact-form__btn-save"
          onClick={() => {
            handleSave();
            setNewContact(
              firstNameValue,
              lastNameValue,
              emailValue,
              adressValue
            );
          }}
        >
          <Button body={"Save"} />
        </div>
        <div className="contact-form__btn-cancel" onClick={() => handleCancel()}>
          <Button body={"Cancel"} />
        </div>
      </form>
    </>
  );
};
