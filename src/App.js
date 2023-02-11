import React, { useState } from "react";
import Form from "./Form";
import MemberList from "./MemberList";

function App() {
  const [members, setMembers] = useState([]);

  return (
    
    <div className="App">
      <Form setMembers={setMembers} />
      <MemberList members={members} />
    </div>
  );
}
export default App;