import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodo] = useState([]);

  return (
    <ul className="bg-gray-100 max-w-md rounded-lg p-5">
        {todos.map((item)=>{
          console.log(item.name)
        })}
      <li>Task1</li>
      <li>Task2</li>
      <li>Task3</li>
    </ul>
  );
};

export default Todos;
