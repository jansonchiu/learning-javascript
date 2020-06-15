import React, {useState} from 'react'; 
import Tweet from './Tweet.js';

function App() { 

  // is Red is set to False 
  const [isRed, setRed] = useState(false);

  // count is set to 0
  const [count, setCount] = useState(0);

  /** Function to increment the count and change the color of text to Red */
  const increment = () => { 
    setCount(count+1);
    setRed(!isRed);
  }; 

  // Users is the variable 
  // setUsers is the function that will change the users variable
  const [users, setUsers] = useState([
    {name: "dataGivenGordon", message:"Ramsey is cool"}, 
    {name: "dataGivenPaul", message:"Walker"}, 
    {name: "dataGivenRamsey", message:"Chef "}, 
    {name: "dataGivenMark", message:"Facebook"}, 
  ])
  return (
    <div className="app">
      {/* Using the ? operator allows to switch states */}
      <h1 className={isRed ? 'red' : ''}> Change my Color</h1>
      <button onClick={increment}> Increment</button>
      <h1>This is count: {count}</h1>
      <p> Hard Coded Data</p>
      {/* Three hard coded Tweets with given props */}
      <Tweet name="janson" message="hello" />
      <Tweet name="johnny" message="Yo my guy"/>
      <Tweet name="tyler" message="ahhh rock on"/>
      {/* This map function allows to iterate through every user in users and set each tweet's props and message to the one given in useState */}
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;