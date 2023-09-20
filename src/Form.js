import React, { useState } from 'react'
import './Form.css'
import Button from './Button';
function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submittedName, setSubmittedName] = useState(null);
    const [submittedAge, setSubmittedAge] = useState(null);
    const nameChangeHandler = (i) => {
        setName(i.target.value)
    };
    const ageChangeHandler = (i) => {
        setAge(i.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = {name, age}
        console.log(input)
        setSubmittedName(name);
        setSubmittedAge(age);
        setName("");
        setAge("")
       
    }
    return(
        <>
   <form onSubmit={handleSubmit}>
    <label className='label-box'>
        Enter name:{' '}   
        <input
          className='input-box'
          type='text'
          required
          value={name}
          onChange={nameChangeHandler}
          
        />
    </label>
    
    <br></br>
    <label className='label-box'>
    Enter age:{" "}
    <input
      className='input-box'
      type='number'
      required
      value={age}
      onChange={ageChangeHandler}
    />
    </label>
    <br></br>
    <button type='submit' className='button-box'>Submit</button>
   </form>
   <div className='result'>
   {submittedName && submittedAge && (<p>Your name: {submittedName} 
   <br></br><br></br>
    Your age: {submittedAge}</p>)} 
   </div>
   </>
    );
}
/*onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
onChange={(e) => setName(e.target.value)}*/ 
export default Form