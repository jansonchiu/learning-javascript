import React, {useState} from 'react'; 
import Tweet from './Tweet.js';

function App() { 
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => { 
    setCount(count+1);
    setRed(!isRed);
  }; 

  const [users, setUsers] = useState([
    {name: "dataGivenGordon", message:"Ramsey is cool"}, 
    {name: "dataGivenPaul", message:"Walker"}, 
    {name: "dataGivenRamsey", message:"Chef "}, 
    {name: "dataGivenMark", message:"Facebook"}, 
  ])
  return (
    <div className="app">
      <h1 className={isRed ? 'red' : ''}> Change my Color</h1>
      <button onClick={increment}> Increment</button>
      <h1>This is count: {count}</h1>
      <p> Hard Coded Data</p>
      <Tweet name="janson" message="hello" />
      <Tweet name="johnny" message="Yo my guy"/>
      <Tweet name="tyler" message="ahhh rock on"/>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;