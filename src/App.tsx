import React from "react";
import "./App.scss";
import { BsListCheck,BsSearch,BsFunnel } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Container ,Form,Button,FormControl} from "react-bootstrap";
function App() {
  return (
    <>
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
            <BsFunnel size={24} />
            <FaPen size={18}  />
          </div>
        </Container>
      </header>
    </>
  );
}

export default App;
