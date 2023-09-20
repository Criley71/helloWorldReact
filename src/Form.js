import React, { useState } from 'react'
import './Form.css'
import Button from './Button';
function Form() {
    const [name, setName] = useState("");
    const [album, setAlbum] = useState("");
    const [submittedName, setSubmittedName] = useState(null);
    const [submittedAlbum, setSubmittedAlbum] = useState(null);
    const nameChangeHandler = (i) => {
        setName(i.target.value)
    };
    const ageChangeHandler = (i) => {
        setAlbum(i.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = {name, age: album}
        console.log(input)
        setSubmittedName(name);
        setSubmittedAlbum(album);
        setName("");
        setAlbum("")
       
    }
    return(
        <>
   <form onSubmit={handleSubmit}>
    <label className='label-box'>
        Enter Name:{' '}   
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
    Favorite Album:{" "}
    <input
      className='input-box'
      type='text'
      required
      value={album}
      onChange={ageChangeHandler}
    />
    </label>
    <br></br>
    <button type='submit' className='button-box'>Submit</button>
   </form>
   <div className='result'>
   {submittedName && submittedAlbum && (<p>Hello, {submittedName} , 
   <br></br>Thank you for your submission <br></br>
    Favorite Album: {submittedAlbum}</p>)} 
   </div>
   </>
    );
}
/*onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
onChange={(e) => setName(e.target.value)}*/ 
export default Form