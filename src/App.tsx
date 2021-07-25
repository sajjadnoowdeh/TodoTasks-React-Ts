import React,{useEffect} from "react";
import "./App.scss";
import { Header,TaksTable,Sidebar} from "./components";
import TaskBox from "./components/TaskBox/TaskBox";
import TasksData from "./TasksData/TasksData";
import { ITaskItem } from "./interface";
function App() {
  const [tasksItems,setTasksItems] = React.useState<ITaskItem[]>(TasksData)

  return (
    <>
      <Header setTasksItems={setTasksItems} tasksItems={tasksItems}/>
      <TaksTable setTasksItems={setTasksItems} tasksItems={tasksItems}/>
      <Sidebar setTasksItems={setTasksItems} tasksItems={tasksItems}/>
       <TaskBox />
    </>

  );
}

export default App;
