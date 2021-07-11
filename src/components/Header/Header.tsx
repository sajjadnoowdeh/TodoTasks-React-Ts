import React,{useEffect} from 'react'
import { BsListCheck,BsSearch,BsFunnel, BsChevronDoubleLeft } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Container ,Form,Button,FormControl} from "react-bootstrap";
import TasksModal  from '../TasksModal/TasksModal';
import "./Header.style.scss";
import {ITaskItem} from "../../interface";
import  TasksData from "../../TasksData/TasksData"
interface IHeader{
  setTasksItems:Function
  tasksItems:ITaskItem[]
}
 const Header:React.FC<IHeader> =({setTasksItems,tasksItems}):JSX.Element =>{

  const [show, setShow] = React.useState<boolean>(false);
  const [currentValue,setCurrentValue] = React.useState<string>("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleFlagFilter = ()=>{
     let sectoinFilter =  document.querySelector(".sidebar-filter") as HTMLElement;
     let boxShadow = document.querySelector(".box-shadow") as HTMLElement
      sectoinFilter.classList.add("show-sidebar")
      document.body.classList.add("overflowHidden")
      boxShadow.classList.add("show-box")
    }
  
    // Search Tasks
    const handleSearch = (e:React.ChangeEvent)=>{
          const inputSearch = e.target as HTMLInputElement;
          setCurrentValue(inputSearch.value) 
    }

    // Filter TasksData with regex Search
      useEffect(() => {
       let reg_task = new RegExp(`^${currentValue}`,"gi");
      if(currentValue.length > 0) {
        setTasksItems(tasksItems.filter((item)=> item.task.match(reg_task) || item?.lastTask?.match(currentValue)))
      }else{
         setTasksItems(TasksData)
      } 
       
    }, [currentValue])


 
 
    return (
        <header className="py-2 text-white">
        <Container fluid className='d-flex justify-content-between align-items-center'>
          <div className="d-flex align-items-center">
            <BsListCheck size={24} />
            <h5 className="mb-0 ml-1">My To-Do Tasks ​</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center w-25">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 header-input"
                onChange={(e)=>handleSearch(e)}
                />
                <BsSearch size={18} className="header-Isearch"/>
            </Form>
            <BsFunnel size={24} onClick={()=> handleFlagFilter()} />
            <FaPen size={18}  onClick={handleShow}
             />
          </div>
          <TasksModal 
            title={"New Task"} 
            onHide={handleClose} 
            show={show}
            setTasksItems={setTasksItems}
            tasksItems={tasksItems}
           />
          
        </Container>
      </header>
    )
}

export default Header;
