import './App.css';
import React,{useState,useEffect} from 'react';
import {Button,TextField,List,ListItem,ListItemText} from '@material-ui/core';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addLists=(e)=>{
    setLists([...lists,inputValue]);
    setInputValue("");
    db.collection('todos').doc(inputValue).set({
      todos:inputValue,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
      console.log("doc added successfully")
    })

  }
  useEffect(()=>{  
    let _lists =[]
     let dbCollection=db.collection('todos');
     dbCollection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data().todos)
          _lists.push(doc.data().todos)
      });
      setLists(_lists)
     })
  },[])

  return (
    <div className="App">
      <h1>Hello</h1>
      <TextField label='Enter name to add to lists' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <br/>
      <br/>
      <Button variant="contained" onClick={addLists}>Add List</Button>
      <ul>
        {lists.map(item =>             
            <li>{item}</li>              
            )
          }      
      </ul>
    </div>
  );
}

export default React.memo(App);
