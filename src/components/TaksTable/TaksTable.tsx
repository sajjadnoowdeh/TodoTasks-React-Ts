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
  const [flagEdit,setFlagEdit] = React.useState<boolean>(true)
  const [editID,setEditID] = React.useState<number>();
  const [getTaskSingle,setTaskSingle] = React.useState<any>()
  const [tasks,setTasks] = React.useState<ITaskItem[]>()
  const handleShow = (id: number | undefined) => {
    setTaskFind(tasksItems.find((item) => item.id === id));
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

  // Remove task
  const handleRemoveTask = (id:number | undefined)=>{
    setTasksItems(tasksItems.filter((item)=>item.id !== id));
  }

  const ResetItems = ()=>{
      return(
          <div className="d-flex justify-content-center p-3 " style={{width: "187%"}}>
                    Nothing to show 😞
                   <a href="#" onClick={()=>setTasksItems(TasksData)}>Click here</a>  to reset.
          </div>
      )
  }


  const handleEditTask = (id:number | undefined)=>{
    setEditID(id)
  }
  
  useEffect(()=>{
    setTasks(tasksItems)
  },tasksItems)

  useEffect(()=>{
  (getTaskSingle) &&  setTasksItems(getTaskSingle);
  },[getTaskSingle])

  return (
    <>

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
      <tbody style={tasksItems.length === 0 ? {borderTop: "1px solid #dee2e6" }: {border:"0"}}>
        {
        
        (tasksItems.length === 0)?
        <ResetItems /> :
        tasksItems.map((item, index) => (
          <TaskItem
            key={index}
            task={item.task}
            priority={item.priority}
            status={item.status}
            deadline={item.deadline}
            setTasksItems={setTasksItems}
            setFlagEdit={setFlagEdit}
            handleShowID={() => handleShow(item.id)}
            handleRemoveTask={()=>handleRemoveTask(item.id)}
            handleEditTask={()=>handleEditTask(item.id)}
          />
         
        ))}
      </tbody>
      <TasksModal
        onHide={handleClose}
        show={show}
        title={(flagEdit)? "Edit Task" : "Veiw Task"}
        taskItem={taskFind}
        editID={editID}
        tasks={tasks}
        setTasks={setTasksItems}
        setTaskSingle={setTaskSingle}

      />
      
    </Table>
    </>
  );
};

export default TaksTable;
