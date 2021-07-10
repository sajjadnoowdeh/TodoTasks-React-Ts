import React from "react";

interface ITasksThead {
  onClick: any;
  value: string;
  SortArrow: any;
  direction: string | null;
  currentValue: string;
}
const TasksThead: React.FC<ITasksThead> = ({
  onClick,
  value = "",
  SortArrow,
  direction,
  currentValue,
}) => {
  return (
    <th className="text-muted display-7 " onClick={onClick}>
      {value}
      {currentValue === value && <SortArrow direction={direction} />}
    </th>
  );
};

export default TasksThead;
