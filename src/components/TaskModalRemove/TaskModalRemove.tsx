import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
interface ITaskModalRemove{
    onHide:Function
    show:boolean
    handleRemoveTask:Function
}
const TaskModalRemove:React.FC<ITaskModalRemove> = ({onHide,show,handleRemoveTask})=>{

    
  return (
      <>
    <Modal show={show} onHide={onHide}>
    <Modal.Header className="border-bottom-0">
      <Modal.Title>Are you sure you want to delete this task?</Modal.Title>
    </Modal.Header>
    <Modal.Footer className="border-top-0 w-100 d-flex justify-content-between">
      <Button className="bg-transparent text-primary border-0"  onClick={()=>onHide()}>
       CANCEL
      </Button>
      <Button variant="primary"  onClick={()=>handleRemoveTask() | onHide()}>
        YES
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default TaskModalRemove;