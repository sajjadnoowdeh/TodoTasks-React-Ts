import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import TasksModal from "../TasksModal/TasksModal";
import TaskItem from "../TaskItem/TaskItem";
import TasksData from "../../TasksData/TasksData";
import "./TasksTable.style.scss";
import { ITaskItem } from "../../interface";
import TasksThead from "../TasksThead/TasksThead"
interface ITasksTable {
  tasksItems: ITaskItem[];
  setTasksItems: Function;
}
interface ISortArrow {
  direction: string;
}
const TaksTable: React.FC<ITasksTable> = ({
  tasksItems,
  setTasksItems,
}): JSX.Element => {
  const [show, setShow] = React.useState<boolean>(false);
  const [taskFind, setTaskFind] = React.useState<ITaskItem>();
  const [direction, setdirection] = React.useState<any>();
  const [currentValue, setCurrrentValue] = React.useState<string>("");
  const handleClose = () => setShow(false);
  const handleShow = (id: number | undefined) => {
    setTaskFind(TasksData.find((item) => item.id === id));
    setShow(true);
  };

  const sortBy = (directoin: string) => {
    if (directoin === "asc") {
      setTasksItems(
        [...TasksData].sort((a, b) => (a.priority > b.priority ? 1 : -1))
      );
    } else if (directoin === "desc") {
      setTasksItems(
        [...TasksData].sort((a, b) => (a.priority > b.priority ? -1 : 1))
      );
    } else {
      setTasksItems(TasksData);
    }
  };
  const sortByStatus = (directoin: string) => {
    if (directoin === "asc") {
      setTasksItems(
        [...TasksData].sort((a, b) => (a.status > b.status ? 1 : -1))
      );
    } else if (directoin === "desc") {
      setTasksItems(
        [...TasksData].sort((a, b) => (a.status > b.status ? -1 : 1))
      );
    } else {
      setTasksItems(TasksData);
    }
  };

  const sortByDeadLine = (directoin: string) => {
    if (directoin === "asc") {
      setTasksItems(
        [...TasksData].sort((a, b) =>
          a.deadline.slice(0, 4) > b.deadline.slice(0, 4) ? 1 : -1
        )
      );
    } else if (directoin === "desc") {
      setTasksItems(
        [...TasksData].sort((a, b) =>
          a.deadline.slice(0, 4) > b.deadline.slice(0, 4) ? -1 : 1
        )
      );
    } else {
      setTasksItems(TasksData);
    }
  };
  const SortArrow: React.FC<ISortArrow> = ({ direction }):JSX.Element => {
    if (direction === "desc") {
      return (
        <>
          <FiArrowUp size={18} />
        </>
      );
    } else {
      return (
        <>
          <FiArrowDown size={18} />
        </>
      );
    }
  };

  const swichDirection = () => {
    if (!direction) {
      setdirection("asc");
    } else if (direction === "asc") {
      setdirection("desc");
    } else {
      setdirection(null);
    }
  };

  const handleSwichDirection = (value: string) => {
    setCurrrentValue(value);
    swichDirection();
    sortBy(direction);
  };
  const handleSwichDirectionStatus = (value: string) => {
    setCurrrentValue(value);
    swichDirection();
    sortByStatus(direction);
  };
  const handleSwichDirectionDeadLine = (value: string) => {
    setCurrrentValue(value);
    swichDirection();
    sortByDeadLine(direction);
  };

  useEffect(() => {
    console.log(currentValue);
  }, [direction]);
  return (
    <Table hover>
      <thead>
        <tr>
          <th
            className="text-muted display-7"
            style={{ borderRight: "1px solid #dee2e6" }}
          >
            <strong>Task</strong>
          </th>

          <TasksThead 
            onClick={()=>handleSwichDirection("priority")} 
            value={"priority"} 
            direction={direction} 
            currentValue={currentValue}
            SortArrow={SortArrow}
          />
          <TasksThead 
            onClick={()=>handleSwichDirectionStatus("status")} 
            value={"status"} 
            direction={direction} 
            currentValue={currentValue}
            SortArrow={SortArrow}
          />
          <TasksThead 
            onClick={()=>handleSwichDirectionDeadLine("deadline")} 
            value={"deadline"} 
            direction={direction} 
            currentValue={currentValue}
            SortArrow={SortArrow}
          />
          <th className="text-muted display-7">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasksItems.map((item, index) => (
          <TaskItem
            key={index}
            task={item.task}
            priority={item.priority}
            status={item.status}
            deadline={item.deadline}
            handleShowID={() => handleShow(item.id)}
          />
        ))}
      </tbody>
      <TasksModal
        onHide={handleClose}
        show={show}
        title={"Veiw Task"}
        taskItem={taskFind}
      />
    </Table>
  );
};

export default TaksTable;
