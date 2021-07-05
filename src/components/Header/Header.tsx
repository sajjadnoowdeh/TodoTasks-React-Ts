import React from 'react'
import { BsListCheck,BsSearch,BsFunnel } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Container ,Form,Button,FormControl} from "react-bootstrap";
import TasksModal  from '../TasksModal/TasksModal';
import "./Header.style.scss"
// interface IHeader{
//   onClick:() =>void
// }
 const Header=() =>{
  const [show, setShow] = React.useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleFlagFilter = ()=>{
     let sectoinFilter =  document.querySelector(".sidebar-filter") as HTMLElement;
     let boxShadow = document.querySelector(".box-shadow") as HTMLElement
      sectoinFilter.classList.add("show-sidebar")
      boxShadow.classList.add("show-box")
    }
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
                />
                <BsSearch size={18} className="header-Isearch"/>
            </Form>
            <BsFunnel size={24} onClick={()=> handleFlagFilter()} />
            <FaPen size={18}  onClick={handleShow}
             />
          </div>
          <TasksModal  onHide={handleClose} show={show}/>
        </Container>
      </header>
    )
}

export default Header;
