import React, {useState, useEffect, useReducer} from "react";
import Employee from "./Employee";
import './Styles/Styles.css';
// import {reducer} from '../Reducer/Reducer';

export const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [show, setShow] = useState(false);
  let initialState = employees.map((employee) => employee.toggle)

  const reducer = (state = [...initialState], { type, index }) => {
    switch (type) {
      case "expand-all":
        return new Array(initialState.length).fill(true);
      case "collapse-all":
        return  new Array(state.length).fill(false);
      case "toggle":
        // state[index] = !state[index];
          if(index === 0) {
            state = [!state[index]].concat(state.slice(1, state.length - 1));
            return state;
          }if (index === state.length - 1){
            state = state.slice(0, state.length - 1).concat([!state[index]]);
            return state;
          }else{
            console.log("state4", state)
            state = state.slice(0, index).concat([!state[index]]).concat(state.slice(index + 1, state.length - 1));
              return state;
          }
        default:
          throw new Error();
        }
    }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (inputType, e) =>{
    setEmployees({ [inputType]: e.target.value });
    setShow(false);
  }
  useEffect(() => {
    getEmployees()
  }, [state]);
  
 const getEmployees = () => {
    fetch('/api/employees')
    .then((res) => res.json())
    .then((data) => setEmployees(data.employees))
    .catch((error) => console.log('Error fetching Employees', error));
    };

   const updateEmployee = (employee) => {
     let {firstName, lastName, email, phone, bio, avatar, streetAddress, city, state, zipCode } = employee;

    fetch(`/api/employees/${employee.id}`, { method: 'PATCH',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        bio: bio,
        avatar: avatar,
        address: {
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode
        }
      }),
    })
      .then((res) => getEmployees())
      .catch((error) => console.log('Note not found', error));
  };

  const deleteEmployee = (id) => {
    fetch(`/api/employees/${id}`, { method: 'DELETE' })
      .then((res) => getEmployees())
      .catch((error) => console.log('Note not found', error));
  };
            
  return (
    <div className="inner-container" >
       <header className="inner-inner-container">
        <button
          onClick={() => dispatch({ type: "expand-all" })}
          className="button-1"
        >
          Expand all
        </button>
        <button
          onClick={() => dispatch({ type: "collapse-all" })}
          disabled={state.every(s => s === false)}
          className={`${state.every(s => s === false) ? 'btn-disabled' : ''} button-1`}
        >
          Collapse all
        </button>
      </header>
      {employees.map((employee) => {
          return (
            <Employee 
              key={employee.id} 
              isOpen={state[employees.indexOf(employee)]} 
              onToggle={() => dispatch({ type: "toggle", index: employees.indexOf(employee) })} 
              employee={employee} 
              updateEmployee={() => updateEmployee(employee)}  
              deleteEmployee={() => deleteEmployee(employee.id)}
              handleChange={handleChange}
              show={show}
              handleShow={() => setShow(true)}
              handleClose={() => setShow(false)}
              getEmployees={getEmployees}
              />
      )})}
    </div>
  )
}

export default Employees;
