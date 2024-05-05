import './App.css'
import Friends from './Friends'
import Posts from './Posts'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {

  function handleClick(){
    alert('Button clicked')
  }

  const handleClick2 = () => {
    alert('Button2 Clicked')
  }

  const addFive = (num) => {
    alert(num + 3);
  }


  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Posts></Posts>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Third Click')}}>Click Me 3</button>
      <button onClick={() => addFive(5)}>Button 4</button>
    </>
  )
}

export default App
