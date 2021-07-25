import React from 'react'

export default function TaskBox() {
    const hideSidebar = (e:React.MouseEvent<HTMLElement>) =>{
        let sectoinFilter =  document.querySelector(".sidebar-filter") as HTMLElement;
        sectoinFilter.classList.remove("show-sidebar")
        e.currentTarget.classList.remove("show-box")
        document.body.classList.remove("overflowHidden")
      }
  
    return (
        <div>
              <div className="box-shadow" onClick={(e)=>hideSidebar(e)}></div>
        </div>
    )
}
