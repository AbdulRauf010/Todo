import { useState } from "react";

const Test = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handelSubmit = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  const handlekey = (e) => {
    if (e.key == "Enter") {
      handelSubmit();
    }
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Add todo</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handlekey}
      />
      <button onClick={handelSubmit}>Submit</button>
      <div>
        <h1>todo items</h1>
        {todo.map((input, index) => {
          return (
            <li key={index}>
              {input}
              <button onClick={() => handleDelete(index)} className="ml-4">
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
