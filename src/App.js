import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  let value = useRef();
  let gender = useRef();
  let role = useRef();
  let marital_status = useRef();
  let [val, setval] = useState();
  let get = (e) => {
    setval(val = value.current.value)
    alert(`<---------- Your Data ---------->
    name : ${value}
    gender : ${gender.current.value}
    role : ${role.current.value}
    marital status : ${marital_status.current.value}`)
    e.preventDefault()
    value.current.value = '';
    gender.current.value = 'Select';
    role.current.value = 'Select';
    marital_status.current.value = 'Choose';
    value.current.focus();
  }
  return (
    <div className="bg">
      <div className="box">
        <div >
          <form onSubmit={get}>
            <input ref={value} placeholder="Enter Your Name" />
            <select name="gender" ref={gender}>
              <option value="Select">--Select--</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <select name="role" ref={role}>
              <option value="Select">--Select--</option>
              <option value="manger">manager</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
            </select>
            <select name="marital_status" ref={marital_status}>
              <option value="Choose">Choose</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
            <input  className="submit" type="submit" value="click"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;