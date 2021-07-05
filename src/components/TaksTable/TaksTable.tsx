import React from 'react'
import {  Badge, Table } from "react-bootstrap";
import { MdVisibility,MdDelete ,MdModeEdit} from "react-icons/md";
import "./TasksTable.style.scss"
const TaksTable= ()=> {
    return (
        <Table hover>
        <thead>
          {/* <Container fluid> */}
          <tr>
            <th
              className="text-muted display-7"
              style={{ borderRight: "1px solid #dee2e6" }}
            >
              <strong>Task</strong>
            </th>
            <th className="text-muted display-7">Priority </th>
            <th className="text-muted display-7">Status</th>
            <th className="text-muted display-7">DeadLine </th>
            <th className="text-muted display-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderRight: "1px solid #dee2e6" }}>Mark</td>
            <td>
              <Badge pill variant="secondary">
                Low
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge pill variant="info">
                To do
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge className="badge-date px-3" pill variant="success">
                2022/3/4
              </Badge>{" "}
            </td>
            <td className="text-muted"><MdVisibility /> <MdModeEdit /> <MdDelete /></td>
          </tr>
          <tr>
            <td style={{ borderRight: "1px solid #dee2e6" }}>Jacob</td>
            <td>
              <Badge pill variant="danger">
                High
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge pill className="badge-doing" variant="secondary">
                Doing
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge className="badge-date px-3" pill variant="success">
                2022/3/4
              </Badge>{" "}
            </td>
            <td className="text-muted"><MdVisibility /> <MdModeEdit /> <MdDelete /></td>
          </tr>
          <tr>
            <td style={{ borderRight: "1px solid #dee2e6" }}>Larry the Bird</td>
            <td>
              <Badge pill variant="warning" className="text-white ">
                Medium
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge pill variant="success">
                Done
              </Badge>{" "}
            </td>
            <td>
              {" "}
              <Badge className="badge-date px-3" pill variant="danger">
                2012/3/4
              </Badge>{" "}
            </td>
            <td className="text-muted"><MdVisibility /> <MdModeEdit /> <MdDelete /></td>
          </tr>
        </tbody>
      </Table>
    )
}

export default TaksTable;