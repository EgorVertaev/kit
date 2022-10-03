import { Card } from "antd";
import React from "react";
import "./HeaderCard.scss";

interface HeaderCardProps {
  title: string;
  value: string;
}

export const HeaderCard = ({ title, value }: HeaderCardProps) => {
  return (
    <Card
      title={title}
      style={{ borderColor: "#DFE0EB", borderRadius: 8 }}
      headStyle={{
        borderBottom: "none",
        margin: 0,
        textAlign: "center",
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: 0.4,
        color: "#9FA2B4"
      }}
      bodyStyle={{ padding: 0, }}
    >
      <div className="header-card">
        <div className="header-card__value">{value}</div>
      </div>
    </Card>
  );
};
