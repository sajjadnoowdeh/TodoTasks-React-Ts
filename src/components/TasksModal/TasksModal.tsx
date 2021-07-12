import React,{useEffect} from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import DatePicker from "react-datepicker"
import TasksData from "../../TasksData/TasksData";
import "react-datepicker/dist/react-datepicker.css"
import {ITaskItem} from "../../interface"
interface ITasksModal {
  onHide: Function
  show: boolean
  title:string
  taskItem?:ITaskItem | undefined 
  setTasksItems?:Function 
  tasksItems?:ITaskItem[]  
  flagEdit?:boolean
  editID?:number | undefined
  setTaskSingle?:any
  tasks?:ITaskItem[]
  setTasks?:Function
}
const TasksModal: React.FC<ITasksModal> = ({ onHide, show ,title="",taskItem,setTasksItems,tasksItems,editID,setTaskSingle,tasks,setTasks}):JSX.Element => {
  const [datapicker,setDataPicker] = React.useState<any>();
  const [currentValue,setCurrentValue] = React.useState<string>("")
  const [itemTask,setItemTask] = React.useState<any>();
  const [name,setName] = React.useState<string>("")
  
  const addTask = (e:any)=>{
    let elementTask = e.target as HTMLInputElement;
    setCurrentValue(elementTask.value);
     setName(e.target.name)
     
  }
  
  useEffect(() => {
    let date = new Date(datapicker);
    setItemTask({...itemTask,[name]:currentValue,deadline:date.toLocaleDateString('en-ZA')})
  }, [name,currentValue,datapicker])
   useEffect(() => {
    (itemTask)&& Object.keys(itemTask).forEach((k) => itemTask[k] == "" && delete itemTask[k] || itemTask[k] == undefined&& delete itemTask[k]);
    //  console.log(itemTask)

  }, [itemTask])
  
  const addTaskItem = (id:number,task:string,priority:string,status:string,deadline:string,detalis:string)=>{
  (tasksItems && setTasksItems)&&  setTasksItems([...tasksItems,{id:id,task:task,priority:priority,status:status,deadline:deadline,detalis:detalis}]);
  }
  const handleAddTask = ()=>{
    addTaskItem(Date.now(),itemTask.task,itemTask.priority,itemTask.status,itemTask.deadline,itemTask.detalis)
  }

  const handleEditTask =()=>{
   console.log("itemTask",itemTask);
   (itemTask && tasks)&& setTaskSingle(tasks.map((item)=>item.id === editID ? {...item,...itemTask} :item ))
    
  }

  // useEffect(()=>{
  //   console.log("tasks",tasks);
    
  // },[tasks])

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Control name="task" defaultValue={taskItem?.task} placeholder={"New Task"}
                   onChange={addTask}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row className="my-4">
              <Form.Group as={Col} controlId="formGridState">
          
                <Form.Control 
                    defaultValue={taskItem?.priority}
                    as="select"
                    name="priority"
                    onChange={addTask}
                    >
                  {(title === "New Task") &&  <option value="All">Priority</option> }
                  <option value="High">High</option>
                  <option value="Medium">Meduim</option>
                  <option value="Low">Low</option>
                </Form.Control>
              </Form.Group>
              <Form.Group    as={Col} controlId="formGridState">
                <Form.Control  
                    defaultValue={taskItem?.status}
                    as="select"
                    name="status"
                    onChange={addTask}
                    >
                  {(title === "New Task") &&  <option value="All">Status</option> }
                  <option value="Todo">To do</option>
                  <option value="Doing">Doing </option>
                  <option value="Done">Done </option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <DatePicker
                    name="deadline"
                    dateFormat="yyyy/MM/dd"
                    className="form-control"
                    value={(title === "New Task") ? "" : taskItem?.deadline}
                    placeholderText={"DealLine"}
                    selected={datapicker}
                    onChange={(date,e)=>{setDataPicker(date); addTask(e)}} />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                name="detalis"
                defaultValue={taskItem?.detalis}
                as="textarea"
                placeholder={"Tasks Detalis(optional) "}
                rows={5}
                onChange={(e)=>addTask(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {
          (title === "Edit Task" || title === "New Task") ?
          <Modal.Footer className="d-flex justify-content-between border-0">
          <Button
            variant="secondary"
            onClick={() => onHide()}
            className="bg-transparent text-primary border-0"
          >
            CANCEL
          </Button>
          <Button variant="primary" onClick={() =>{handleEditTask(); handleAddTask(); onHide()}}>
            SAVE
          </Button>
        </Modal.Footer>
       :
       null
    }
    </Modal>

    </>
  );
};
export default TasksModal;
