import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsFunnel } from "react-icons/bs";
import SelectItem from "../SelectIetm/SelectItem";
import TasksData from "../../TasksData/TasksData";
import "./Sidebar.style.scss";
import { ISelectValues, ITaskItem } from "../../interface";
interface ISidebar {
  tasksItems: ITaskItem[];
  setTasksItems: Function;
}
const Sidebar: React.FC<ISidebar> = ({
  tasksItems,
  setTasksItems,
}): JSX.Element => {
  const [taskFilter, setTaskFilter] = React.useState<ISelectValues>();
  useEffect(() => {
    if (taskFilter) {
      if (taskFilter.priority && taskFilter.status) {
        setTasksItems(
          TasksData.filter(
            (item) =>
              item.priority === taskFilter?.priority &&
              item.status === taskFilter?.status
          )
        );
      } else if (taskFilter.priority) {
        setTasksItems(
          TasksData.filter((item) => item.priority === taskFilter?.priority)
        );
      } else if (taskFilter.status) {
        setTasksItems(
          TasksData.filter((item) => item.status === taskFilter?.status)
        );
      } else if (taskFilter.deadline) {
        taskFilter.deadline === "For the future" &&
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.deadline.slice(0, 4) > "2021" &&
                item.deadline.slice(5, 7) > "04"
            )
          );
        taskFilter.deadline === "Overdue" &&
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.deadline.slice(0, 4) < "2022" &&
                item.deadline.slice(5, 7) < "06"
            )
          );
      }

      //check priority with status with deadline
      if (taskFilter.priority && taskFilter.status && taskFilter.deadline) {
        console.log("3");

        if (
          taskFilter.priority &&
          taskFilter.status &&
          taskFilter.deadline === "Overdue"
        ) {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.priority === taskFilter?.priority &&
                item.status === taskFilter?.status &&
                item.deadline.slice(0, 4) < "2022"
            )
          );
        }

        if (
          taskFilter.priority &&
          taskFilter.status &&
          taskFilter.deadline === "For the future"
        ) {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.priority === taskFilter?.priority &&
                item.status === taskFilter?.status &&
                item.deadline.slice(0, 4) > "2021"
            )
          );
        }
      }

      //  check status with deadline
      if (taskFilter.status && taskFilter.deadline && !taskFilter.priority) {
        console.log("2");

        if (taskFilter.status && taskFilter.deadline === "Overdue") {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.status === taskFilter?.status &&
                item.deadline.slice(0, 4) < "2022"
            )
          );
        }

        if (taskFilter.status && taskFilter.deadline === "For the future") {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.status === taskFilter?.status &&
                item.deadline.slice(0, 4) > "2021"
            )
          );
        }
      }

      //  check priority with deadline
      if (taskFilter.priority && taskFilter.deadline && !taskFilter.status) {
        if (taskFilter.priority && taskFilter.deadline === "Overdue") {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.priority === taskFilter?.priority &&
                item.deadline.slice(0, 4) < "2022"
            )
          );
        }

        if (taskFilter.priority && taskFilter.deadline === "For the future") {
          setTasksItems(
            TasksData.filter(
              (item) =>
                item.priority === taskFilter?.priority &&
                item.deadline.slice(0, 4) > "2021"
            )
          );
        }
      }

      !taskFilter.priority &&
        !taskFilter.deadline &&
        !taskFilter.status &&
        setTasksItems(TasksData);
    }
  }, [taskFilter]);

  //  useEffect(() => {
  //    (taskFilter)&&  setTasksItems(TasksData.filter(item=>item.priority === taskFilter?.priority &&item.status === taskFilter?.status)
  //   }, [taskFilter])
  return (
    <div className="sidebar-filter">
      <Container>
        <div>
          <div className="d-flex align-items-center py-2 sidebar-top">
            <div className="filter-icon text-white">
              <BsFunnel size={22} />
            </div>
            <div className="ml-3">
              <h5>My To-Do Tasks</h5>
              <p className="text-muted mb-0">Filters</p>
            </div>
          </div>
          <hr />
          <div className="section-filter d-flex flex-column justify-content-between">
            <SelectItem
              lable={"Priority"}
              name={"priority"}
              value1={"High"}
              value2={"Medium"}
              value3={"Low"}
              setTaskFilter={setTaskFilter}
              taskFilter={taskFilter}
            />
            <SelectItem
              lable={"Status"}
              name={"status"}
              value1={"Todo"}
              value2={"Doing"}
              value3={"Done"}
              setTaskFilter={setTaskFilter}
              taskFilter={taskFilter}
            />
            <SelectItem
              lable={"Deadline"}
              name={"deadline"}
              value1={"Overdue"}
              value2={"For today"}
              value3={"For the future"}
              setTaskFilter={setTaskFilter}
              taskFilter={taskFilter}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
