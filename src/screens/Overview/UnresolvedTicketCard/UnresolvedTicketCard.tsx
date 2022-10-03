import { Card } from "antd";
import React from "react";
import "./UnresolvedTicketCard.scss";

const UnresolvedTikecketTitle = () => {
  return (
    <div className="unresolved-title">
      <h2 className="unresolved-title__head">Unresolved tickets</h2>
      <p className="unresolved-title__text">
        <span className="unresolved-title__subtitle">Group:</span> Support
      </p>
    </div>
  );
};

export const UnresolvedTicketCard = () => {


  return (
    <Card
      title={<UnresolvedTikecketTitle />}
      extra={<button style={{ color: "#3751FF" }}>View details</button>}
      style={{ borderColor: "#DFE0EB", borderRadius: 8 }}
      bodyStyle={{ padding: 0 }}
      headStyle={{ borderBottom: "none", margin: 0 }}
      className="unresolved"
    >
      <ul className="unresolved__list">
        <li className="unresolved__item">
          <div className="unresolved__inner">
            <div className="unresolved__text">
              Waiting on Feature Request
            </div>
            <div className="unresolved__value">4238</div>
          </div>
        </li>
        <li className="unresolved__item">
          <div className="unresolved__inner">
            <div className="unresolved__text">
              Awaiting Customer Response
            </div>
            <div className="unresolved__value">1005</div>
          </div>
        </li>
        <li className="unresolved__item">
          <div className="unresolved__inner">
            <div className="unresolved__text">
              Awaiting Developer Fix
            </div>
            <div className="unresolved__value">914</div>
          </div>
        </li>
        <li className="unresolved__item">
          <div className="unresolved__inner">
            <div className="unresolved__text">Pending</div>
            <div className="unresolved__value">281</div>
          </div>
        </li>
      </ul>
    </Card>
  );
};
