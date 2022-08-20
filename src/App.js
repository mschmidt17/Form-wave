import { useState } from 'react';
import Label from './Label';
import './App.css';
import Swal from "sweetalert2";


function App() {
  const [value, setValue] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value.email || !value.password) {
      Swal.fire({
        icon: 'error',
        title: "Please fill all the fields",
        })
    } else {
      setValue({ email: '', password: '' });
      Swal.fire({
        icon: 'success',
        title: "Login success",
        })
    }


    

  };

  return (
    <div className="App">
      <div className="container">
        <h1>Please Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control">
            <input
              type="text"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              required
            />
            <Label label="Email" />
          </div>
          <div className="form-control">
            <input
              type="password"
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              required
            />
            <Label label="Password" />
          </div>
          <button className="btn">Login</button>
          <p className="text">
            Don't have an account? <a href="#!">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;