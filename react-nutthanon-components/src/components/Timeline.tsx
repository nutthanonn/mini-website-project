import React from "react";
import styled from "styled-components";

const Timeline: React.FC = () => {
  return (
    <Sesstions>
      <SesstionChild>
        <TimeCustom>09:00</TimeCustom>
        <Detail>อาบน้ำ</Detail>
      </SesstionChild>
      <SesstionChild>
        <TimeCustom>11:00</TimeCustom>
        <Detail>เดิน</Detail>
      </SesstionChild>
      <SesstionChild>
        <TimeCustom>13:00</TimeCustom>
        <Detail>Hello</Detail>
      </SesstionChild>
    </Sesstions>
  );
};

export default Timeline;

const Sesstions = styled.ul`
  list-style: none;
  padding: 0;
`;

const SesstionChild = styled.li`
  list-style: none;
  padding-left: 20px;
  width: 300px;
  margin-left: 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -5.5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
  }
`;

const TimeCustom = styled.p`
  font-weight: bold;
`;

const Detail = styled.p`
  padding: 10px 15px;
`;
