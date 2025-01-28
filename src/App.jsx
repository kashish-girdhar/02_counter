import './App.css'

function App() {
  const increaseHandler=()=>{
    console.log("Clicked" , Counter);   
    Counter=Counter+1
  }
  let Counter=15
  return (
    <>
    <h1>Chai Aur Counter</h1>
    <h2>Counter Value : {Counter}</h2>
    <button onClick={increaseHandler}>Add Value</button>
    <br/>
    <button>Remove Value</button>
    </>
  )
}

export default App
