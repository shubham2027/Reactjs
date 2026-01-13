import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    "student1",
    "student2",
    "student3",
    "xyz"
  ]);

  function add(name) {
    setStudents([...students, name]);
  }

  function remove(name) {
    setStudents(students.filter((s) => s !== name));
  }

  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(students);

  useEffect(() => {
    let result = students.filter((name) => name.includes(search));
    setFilterList(result);
  }, [search, students]);

  const context = useRef();

  function findSearch() {
    context.current.focus();
  }

  return (
    <>
      <div>
        <br />
        <input
          ref={context}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
          {filterList.map((name) => (
            <li key={name}>
              {name}{" "}
              <button onClick={() => remove(name)}>Delete</button>
            </li>
          ))}
        </ul>

        <button onClick={findSearch}>Find Search Button</button>

        <button onClick={() => add("student45")}>Add</button>
      </div>
    </>
  );
}

export default App;
