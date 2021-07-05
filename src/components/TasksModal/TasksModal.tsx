import React from 'react'
import {Button,Modal,Form,Col} from "react-bootstrap";
interface ITasksModal{
  onHide:Function
  show:boolean
}
const  TasksModal:React.FC<ITasksModal> =({onHide,show})=> {

    return (
        <>
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>New Task </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridAddress1">
        <Form.Label>Task Name</Form.Label>
        <Form.Control placeholder="Task Name" />
      </Form.Group>
      </Form.Row>


  <Form.Row className="mb-3">

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Priority</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Staus</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>DealLine</Form.Label>
      <Form.Control placeholder={"DealLine"} />
    </Form.Group>
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder={"Tasks Detalis(optional) "} rows={5} />
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between border-0">
            <Button variant="secondary" onClick={()=>onHide} className="bg-transparent text-primary border-0">
              CANCEL
            </Button>
            <Button variant="primary" onClick={()=>onHide} >
              SAVE 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default TasksModal;