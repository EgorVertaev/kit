import React from "react";
import { Header } from "../../components/Header/Header";
import { ChartComponent }  from "./Chart/ChartComponent";
import { HeaderCard } from "./HeaderCard/HeaderCard";
import "./Overview.scss";
import { TasksCard } from "./TasksCard/TasksCard";
import { UnresolvedTicketCard } from "./UnresolvedTicketCard/UnresolvedTicketCard";

export const Overview = () => {
  return (
    <div className="overview">
      <Header title={"Overview"} />
      <div className="overview__inner">
        <ul className="overview__list">
          <li className="overview__item">
            <HeaderCard title={"Unresolved"} value={"60"} />
          </li>
          <li className="overview__item">
            <HeaderCard title={"Overdue"} value={"16"} />
          </li>
          <li className="overview__item">
            <HeaderCard title={"Open"} value={"43"} />
          </li>
          <li className="overview__item">
            <HeaderCard title={"On hold"} value={"64"} />
          </li>
        </ul>

        <div className="overview__chart">
          <div className="overview__wrapper">
            <div className="overview__chart-inner">
              <ChartComponent />
            </div>
            <ul className="overview__info-list">
              <li className="overview__info-item">
                <span className="overview__info-title">Resolved</span>
                <span className="overview__info-value">449</span>
              </li>
              <li className="overview__info-item">
                <span className="overview__info-title">Received</span>
                <span className="overview__info-value">426</span>
              </li>
              <li className="overview__info-item">
                <span className="overview__info-title">
                  Average first response time
                </span>
                <span className="overview__info-value">33m</span>
              </li>
              <li className="overview__info-item">
                <span className="overview__info-title">
                  Average response time
                </span>
                <span className="overview__info-value">3h 8m</span>
              </li>
              <li className="overview__info-item">
                <span className="overview__info-title">
                  Resolution within SLA
                </span>
                <span className="overview__info-value">94%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="overview__footer">
          <div className="overview__unresolved-tikets">
            <UnresolvedTicketCard />
          </div>
          <div className="overview__tasks">
            <TasksCard />
          </div>
        </div>
      </div>
    </div>
  );
};
