import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from "react";
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Routes from './components/Routes';
import { getAll } from './api/call-api';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      getAll().then(response => setUsers(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []); 
  const onHandleAdd = (user) =>{
        setUsers([...users, user]);
  }
  const onHandleDelete = (id) => {
    const rsDelete = users.filter((user) => user.id !== id);
    setUsers(rsDelete);
  }
  const onHandleEdit = (data)  =>{
   const newUsers = users.map((user) => user.id === data.id ? data : user);
    setUsers(newUsers);
  }
  return (
    <div className="App">
       <Routes users={users}
            
            onAdd={onHandleAdd}
            onDelete = {onHandleDelete}
            onEdit= {onHandleEdit}
       />
    </div>
  );
}

export default App;
