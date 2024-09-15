import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [loanType, setLoanType] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/search", {
        loan_type: loanType,
        name,
        age,
        gender,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className="App">
      <h1>NBFC Loan Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Loan Type"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {results && (
        <div>
          <h2>Search Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
