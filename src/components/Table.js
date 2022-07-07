import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const formDetail = useSelector((state) => state.userDetail.users);
  return (
    <div>
      <table className="table table-dark table-striped mt-2">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {formDetail.map((data) => {
            return (
              <tr>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.gender}</td>
                <td>{data.hobbies}</td>
                <td>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
