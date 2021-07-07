import React,{useState} from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {ITaskItem} from "../../interface"
interface ITasksModal {
  onHide: Function;
  show: boolean;
  title:string
  taskItem?:ITaskItem | undefined 
}
const TasksModal: React.FC<ITasksModal> = ({ onHide, show ,title="",taskItem}):JSX.Element => {
  const [datapicker,setDataPicker] = React.useState<any>()
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
                <Form.Control defaultValue={taskItem?.task} placeholder={"New Task"} />
              </Form.Group>
            </Form.Row>

            <Form.Row className="my-4">
              <Form.Group as={Col} controlId="formGridState">
          
                <Form.Control defaultValue={taskItem?.priority} as="select" name="priority">
                  <option value="All">Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Meduim</option>
                  <option value="Low">Low</option>
                </Form.Control>
              </Form.Group>
              <Form.Group    as={Col} controlId="formGridState">
                <Form.Control  defaultValue={taskItem?.status} as="select" name="status">
                  <option value="All">Status</option>
                  <option value="Todo">To do</option>
                  <option value="Doing">Doing </option>
                  <option value="Done">Done </option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <DatePicker
                    dateFormat="yyyy/MM/dd"
                    className="form-control"
                    value={taskItem?.deadline}
                    placeholderText={"DealLine"}
                    selected={datapicker}
                    onChange={(date)=>setDataPicker(date)} />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                defaultValue={taskItem?.detalis}
                as="textarea"
                placeholder={"Tasks Detalis(optional) "}
                rows={5}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {
          (taskItem) ? null :
          <Modal.Footer className="d-flex justify-content-between border-0">
          <Button
            variant="secondary"
            onClick={() => onHide}
            className="bg-transparent text-primary border-0"
          >
            CANCEL
          </Button>
          <Button variant="primary" onClick={() => onHide}>
            SAVE
          </Button>
        </Modal.Footer>
      
    }
    </Modal>
   
    </>
  );
};
export default TasksModal;
