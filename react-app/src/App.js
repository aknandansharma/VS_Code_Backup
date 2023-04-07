import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    let arr = data
    arr.splice(index, 1)
    setData([...arr])
  };

  return (
    <div className="App">
      <Header />
      <br />

      <div className="main">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        {data.map((element, index) => {
          return (
            <div key={index} className="dataShow">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button onClick={removeItem} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 4:4
export default App;
