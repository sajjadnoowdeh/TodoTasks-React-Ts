import React ,{useEffect}from 'react'
import { Table } from "react-bootstrap";
import  TasksModal  from '../TasksModal/TasksModal';
import TaskItem from '../TaskItem/TaskItem';
import TasksData from '../../TasksData/TasksData';
import "./TasksTable.style.scss";
import { ITaskItem } from '../../interface';
interface ITasksTable{
  tasksItems:ITaskItem[]
}
const TaksTable:React.FC<ITasksTable> = ({tasksItems}):JSX.Element => {
  const [show, setShow] = React.useState<boolean>(false);
  const [taskFind,setTaskFind] = React.useState<ITaskItem>();
  const handleClose = () => setShow(false);
  const handleShow = (id:number | undefined) =>{
    setTaskFind(TasksData.find(item => item.id === id))
    setShow(true)
  }
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
            <th className="text-muted display-7">Priority </th>
            <th className="text-muted display-7">Status</th>
            <th className="text-muted display-7">DeadLine </th>
            <th className="text-muted display-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksItems.map((item,index)=>(
              <TaskItem 
              key={index}
              task={item.task} 
              priority={item.priority}
              status={item.status}
              deadline={item.deadline} 
              handleShowID={()=>handleShow(item.id)}
            />
            ))
          }
        </tbody>
        <TasksModal 
           onHide={handleClose}
           show={show} 
           title={"Veiw Task"}
           taskItem={taskFind}
           />
      </Table>
    )
}

export default TaksTable;