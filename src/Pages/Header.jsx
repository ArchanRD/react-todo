import React from "react";
import { useState } from "react";
import "../App.css";

const Home = () => {
  const [todos, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.text.value != " ") {
      setTodo([...todos, e.target.text.value]);
      document.getElementById("alert").classList.add("hidden");
    } else {
      document.getElementById("alert").classList.remove("hidden");
    }

    document.getElementById("text").value = "";
  }

  function handleClick(e) {
    if (e.target.checked) {
      e.target.parentNode.parentNode.classList.add("line-through")
    } else {
      e.target.parentNode.parentNode.classList.remove("line-through")
    }
  }

  function handleDelete(e) {
    e.target.parentNode.parentNode.remove();
  }

  return (
    <>
      <h1 className="font-poppins font-medium text-center text-4xl my-5 underline">
        Todo App
      </h1>
      <form
        onSubmit={handleSubmit}
        id="form"
        className="my-4 mt-10 mx-auto px-4 flex flex-col max-w-md gap-3"
      >
        <h1 className="font-poppins text-3xl font-semibold">
          Enter your task below:
        </h1>
        <div>
          <input
            type="text"
            id="text"
            placeholder="Type your task here"
            className="border border-gray-300 rounded-lg p-2 w-full font-poppins box-border focus:outline-blue-600"
            required
          />
          <p
            id="alert"
            className="hidden text-red-400 font-medium font-poppins mt-1"
          >
            Please enter a task!
          </p>
        </div>

        <input
          type="submit"
          className="bg-black text-white font-poppins px-8 py-2 rounded-lg hover:bg-[#212121]"
          value="Add Task"
        />
      </form>

      <ul
        className={
          todos.length > 1
            ? "bg-gray-100 max-w-md rounded-lg p-5 mx-auto mt-10 flex flex-col gap-4"
            : "bg-gray-100 max-w-md rounded-lg p-5 mx-auto mt-10"
        }
      >
        {todos.map((item, i) => {
          return (
            <div key={i} className="flex justify-between">
              <li className="font-poppins text-xl list-disc ml-5 todoItem" >
                {item}
              </li>
              <div className="flex items-center">
                <span
                  onClick={handleDelete}
                  className="material-symbols-outlined text-red-500 cursor-pointer text-3xl hover:text-red-400"
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
