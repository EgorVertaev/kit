import React, { useState } from "react";
import { Card, Radio, RadioChangeEvent } from "antd";
import { Bage } from "../../../components/Bage/Bage";
import { AddIcon } from "../../../components/Icons/Icon";
import "./TasksCard.scss";

const TasksTitle = () => {
  return (
    <div className="tasks-title">
      <h2 className="tasks-title__head">Tasks</h2>
      <p className="tasks-title__text">Today</p>
    </div>
  );
};

export const TasksCard = () => {

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Card
      title={<TasksTitle />}
      extra={<button style={{ color: "#3751FF" }}>View all</button>}
      style={{ borderColor: "#DFE0EB", borderRadius: 8 }}
      headStyle={{ borderBottom: "none", margin: 0 }}
      bodyStyle={{ padding: 0 }}
      className="tasks"
    >
      <form className="tasks__form">
        <div className="tasks__top">
          <div className="tasks__top-text">Create new task</div>
          <button className="tasks__top-btn">
            <AddIcon />
          </button>
        </div>
        <Radio.Group onChange={onChange} value={value}>
          <ul className="tasks__list">
            <li className="tasks__item">
              <div className="tasks__inner">
                <Radio
                  value={2}
                  style={{ marginRight: "20px" }}
                />
                <label className="tasks__label">Finish ticket update</label>
              </div>
              <Bage color={"#ffffff"} bgColor={"#FEC400"} text={"urgant"} />
            </li>
            <li className="tasks__item">
              <div className="tasks__inner">
                <Radio
                  value={3}
                  style={{ marginRight: "20px" }}
                />
                <label className="tasks__label">Create new ticket example</label>
              </div>
              <Bage color={"#ffffff"} bgColor={"#29CC97"} text={"new"} />
            </li>
            <li className="tasks__item">
              <div className="tasks__inner">
                <Radio
                  value={1}
                  style={{ marginRight: "20px" }}
                />
                <label className="tasks__label">Update ticket report</label>
              </div>
              <div className="tasks__bage">
                <Bage color={"#9FA2B4"} bgColor={"#F0F1F7"} text={"default"} />
              </div>
            </li>
          </ul>
        </Radio.Group>
      </form>
    </Card>
  );
};
