import React, { useEffect, useState } from 'react';
import './style.css';

function UserTable() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data.users));
  }, []);

  return (
    <div className="user-table-container">
      <h1>Dummy Data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>SerialNo</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.image} alt="Profile Pic" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
