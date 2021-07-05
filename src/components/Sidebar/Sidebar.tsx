import React from 'react'
import { Container } from "react-bootstrap";
import {  BsFunnel } from "react-icons/bs";
import SelectItem from '../SelectIetm/SelectItem';
import "./Sidebar.style.scss"
const Sidebar=()=> {
    return (
         
        <div className="sidebar-filter">
           <Container>
               <div>
                <div className="d-flex align-items-center py-2 sidebar-top">
                   <div className="filter-icon text-white">
                     <BsFunnel size={22}/>
                   </div>
                   <div  className="ml-3">
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
                    value2={"Meduim"}
                    value3={"Low"}
                   />
                     <SelectItem
                    lable={"Status"}
                    name={"status"} 
                    value1={"Todo"}
                    value2={"Doing"}
                    value3={"Done"}
                   />
                      <SelectItem
                    lable={"Deadline"}
                    name={"deadline"} 
                    value1={"Overdue"}
                    value2={"For today"}
                    value3={"For the future"}
                   />
               
                 </div>
               </div>
           </Container>
        </div>
    )
}

export default Sidebar