import React from "react";
import "../App.css";

export default function ListRender() {
  const users = [
    { id: 1, name: "yash", email: "yash@example.com", age: 23, city: "Chennai", role: "Developer" },
    { id: 2, name: "rajesh", email: "rajesh@example.com", age: 25, city: "Salem", role: "Designer" },
    { id: 3, name: "Dravid", email: "dravid@example.com", age: 27, city: "Bengaluru", role: "Tester" },
    { id: 4, name: "Ravi", email: "ravi@example.com", age: 24, city: "Madurai", role: "Student" },
    { id: 5, name: "Rahul", email: "rahul@example.com", age: 26, city: "Namakkal", role: "Developer" },
  ];

  return (
    <div>
      <h2>List Rendering</h2>

      <div className="user-grid">
        {users.map((person) => (
          <div className="user-card" key={person.id}>
            <h3>{person.name}</h3>
            <p>Email: {person.email}</p>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
            <p>Role: {person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}