import React,{useEffect} from "react";
import "./App.scss";
import { Header,TaksTable,Sidebar} from "./components";
import TasksData from "./TasksData/TasksData";
import { ITaskItem } from "./interface";
function App() {
  const [tasksItems,setTasksItems] = React.useState<ITaskItem[]>(TasksData)
  const hideSidebar = (e:React.MouseEvent<HTMLElement>) =>{
    let sectoinFilter =  document.querySelector(".sidebar-filter") as HTMLElement;
    sectoinFilter.classList.remove("show-sidebar")
    e.currentTarget.classList.remove("show-box")
    document.body.classList.remove("overflowHidden")
  }
  useEffect(() => {
    console.log(tasksItems);
}, [tasksItems])
  return (
    <>
      <Header setTasksItems={setTasksItems} tasksItems={tasksItems}/>
      <TaksTable setTasksItems={setTasksItems} tasksItems={tasksItems}/>
      <Sidebar setTasksItems={setTasksItems} tasksItems={tasksItems}/>
      <div className="box-shadow" onClick={(e)=>hideSidebar(e)}></div>
    </>

  );
}

export default App;
