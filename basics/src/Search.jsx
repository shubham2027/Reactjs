import React from 'react'

const Search = () => {
   const students = ["Aisha", "Rohan", "Mehak", "Kabir", "Zoya", "Arjun"];

  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(students);

  // runs every time "search" changes
  useEffect(() => {
    const result = students.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(result);
  }, [search]); // dependency

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Search Filter</h2>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search
