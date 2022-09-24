import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import AddTodo from './Components/AddTodo';
import { useState, useTransition } from 'react';

function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  return (
    <div className="App">
      {/* <Counter/> */}
      <div>
        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.password)}/>
      </div>
      <AddTodo/>
    </div>
  );
}

export default App;
