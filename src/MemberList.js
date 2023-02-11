import React from "react";

const MemberList = ({ members }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member => (
          <tr key={member.email}>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.phoneNumber}</td>
            <td>{member.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberList;