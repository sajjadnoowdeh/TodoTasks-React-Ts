import React from "react";
import { MdVisibility, MdDelete, MdModeEdit } from "react-icons/md";
import { Badge } from "react-bootstrap";
import "./TaskItem.style.scss";
// import { ITaskItem } from "../../interface";
export interface ITaskItem{
  task:string
  priority:string
  status:string
  deadline:string
  handleShowID:Function
}
const TaskItem: React.FC<ITaskItem> = ({
  task = "",
  priority = "",
  status = "",
  deadline = "",
  handleShowID=Function
  
}) => {
  let indexYear = deadline.indexOf("/", 0);
  let year = deadline.slice(0, indexYear);
  let mounth = deadline.slice(indexYear + 1, 7);

  return (
    <>
      <tr>
        <td style={{ borderRight: "1px solid #dee2e6" }}>{task}</td>
        <td>
          <Badge
            className="text-white"
            pill
            variant={
              priority === "Low"
                ? "secondary"
                : priority === "High"
                ? "danger"
                : "warning"
            }
          >
            {priority}
          </Badge>{" "}
        </td>
        <td>
          {" "}
          <Badge
            className="badge-doing"
            pill
            variant={
              status === "Done"
                ? "success"
                : status === "Todo"
                ? "info"
                : "secondary"
            }
          >
            {status}
          </Badge>{" "}
        </td>
        <td>
          {" "}
          <Badge
            className="badge-date px-3"
            pill
            variant={year < "2022" && mounth < "06" ? "danger" : "success"}
          >
            {deadline}
          </Badge>{" "}
        </td>
        <td className="text-muted">
          <MdVisibility onClick={()=> handleShowID()} /> <MdModeEdit className="mx-2" />{" "}
          <MdDelete />
        </td>
      </tr>
    </>
  );
};

export default TaskItem;
