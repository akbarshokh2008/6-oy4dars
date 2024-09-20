import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("uzbek");
  const [deck, setDeck] = useState("");
  const [check, setCheck] = useState([]);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleNat(event) {
    setNat(event.target.value);
  }
  function handleDeck(event) {
    setDeck(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let formMal = {
      name,
      email,
      nat,
      deck,
      lang: check,
      id: Date.now(),
    };
    let copied = [...users];
    copied.push(formMal);
    setUsers(copied);
    setName("");
    setEmail("");
    setNat("uzbek");
    setDeck("");
    setCheck([]);
  }
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCheck([...check, name]);
    } else {
      setCheck(check.filter((lang) => lang !== name));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleName}
          value={name}
          type="text"
          placeholder="Enter name..."
          required
        />
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="Enter email..."
          required
        />
        <select onChange={handleNat} value={nat} name="" id="">
          <option value="uzbek">uzbek</option>
          <option value="qirgiz">qirgiz</option>
          <option value="qozoq">qozoq</option>
        </select>
        <textarea
          onChange={handleDeck}
          value={deck}
          name=""
          id=""
          cols="30"
          rows="10"
          required
          placeholder="O'zingiz haqizda..."
        ></textarea>
        <div className="chexbox">
          <h3>Qaysi tillarni bilasiz?</h3>
          <span>
            {" "}
            <input
              type="checkbox"
              name="uzbek"
              id="uzbek"
              onChange={handleCheck}
              checked={check.includes("uzbek")}
            />
            <label htmlFor="uzbek">uzbek</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="russian"
              id="russian"
              onChange={handleCheck}
              checked={check.includes("russian")}
            />
            <label htmlFor="russian">russian</label>
          </span>
          <span>
            {" "}
            <input
              type="checkbox"
              name="english"
              id="english"
              onChange={handleCheck}
              checked={check.includes("english")}
            />
            <label htmlFor="english">english</label>
          </span>
        </div>
        <button>Yuborish</button>
      </form>

      <h2>Users</h2>
      <div className="cards">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
