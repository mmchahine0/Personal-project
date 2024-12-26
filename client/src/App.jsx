import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import axios from "axios";
import Todo from "./pages/todo.jsx";

import Button from "./components/Button.jsx";
function App() {
  const [todo, setTodo] = useState({ subject: "", text: "" });
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  // const [count, setCount] = useState(0);
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [User, setUser] = useState({ userName: "", email: "" });

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const response = await axios.get(``);
  //     } catch (error) {}
  //   };
  // }, []);

  // const handleOnClick = () => {
  //   setCount((num) => num + 1);
  // };
  // const handleChange = () => {
  //   const user = { email: email, userName: userName };
  //   setUser(user);
  // };
  // const handleSubmition = (e) => {
  //   e.preventDefault();
  //   handleChange();
  //   console.log(User);
  // };

  return (
    <>
      {/* <Button onClick={handleOnClick} label={count} />
      <div className="inputs">
        <form onSubmit={handleSubmition}>
          <label>Please enter info </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Submit</button>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div> */}

      <div>
        <h2>Todos:</h2> <br />
        <Todo text={text} subject={subject} />
      </div>
    </>
  );
}

export default App;
