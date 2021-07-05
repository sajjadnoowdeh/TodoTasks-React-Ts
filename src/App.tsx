import React from "react";
import { useEffect } from "react"; 
import "./App.scss";
import { Container, Row, Badge, Table } from "react-bootstrap";
import { BsFillEyeFill, BsFunnel } from "react-icons/bs";
import { MdVisibility,MdDelete ,MdModeEdit} from "react-icons/md";
import { Header,TaksTable,Sidebar ,TasksModal} from "./components";
function App() {
 
  const hideSidebar = (e:React.MouseEvent<HTMLElement>) =>{
    let sectoinFilter =  document.querySelector(".sidebar-filter") as HTMLElement;
    sectoinFilter.classList.remove("show-sidebar")
    e.currentTarget.classList.remove("show-box")
  }

  return (
    <>
      <Header />
      <TaksTable />
      <Sidebar />
      <div className="box-shadow" onClick={(e)=>hideSidebar(e)}></div>
    
    </>

  );
}

export default App;
